// Chat API Service for Paeonia Chatbot
// Connects to Railway-hosted Flask backend

// Configuration
const API_CONFIG = {
  // IMPORTANT: Set REACT_APP_API_URL in Netlify environment variables
  // Example: https://your-app-name.up.railway.app
  BASE_URL: process.env.REACT_APP_API_URL || "http://localhost:8000",
  ENDPOINTS: {
    CHAT: "/api/chat", // Main chat endpoint
    HEALTH: "/api/health", // Health check
    STATUS: "/api/status", // Detailed system status
  },
  HEADERS: {
    "Content-Type": "application/json",
    // No authentication required for chat endpoints
  },
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 2,
};

class ChatApiService {
  constructor() {
    this.conversationHistory = [];
  }

  async makeRequest(url, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...API_CONFIG.HEADERS,
          ...options.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === "AbortError") {
        throw new Error("Request timeout - please try again");
      }

      throw error;
    }
  }

  async sendMessage(message, retryCount = 0) {
    try {
      // Use mock responses only in development without REACT_APP_API_URL set
      if (
        !process.env.REACT_APP_API_URL &&
        process.env.NODE_ENV === "development"
      ) {
        console.warn(
          "⚠️ Using mock responses. Set REACT_APP_API_URL to connect to Railway backend."
        );
        return this.getMockResponse(message);
      }

      // Add user message to conversation history
      this.conversationHistory.push({
        role: "user",
        content: message,
      });

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHAT}`;

      // Backend expects messages array format
      const payload = {
        messages: [...this.conversationHistory],
      };

      const response = await this.makeRequest(url, {
        method: "POST",
        body: JSON.stringify(payload),
        credentials: "include", // Important for CORS with sessions
      });

      // Add assistant response to conversation history
      if (response.role === "assistant" && response.content) {
        this.conversationHistory.push({
          role: "assistant",
          content: response.content,
        });
      }

      return {
        message: response.content,
        source: response.source || "groq_rag",
        status: response.status || "success",
        role: response.role || "assistant",
        // ✅ NEW: Lead capture data from backend
        lead_capture_prompt: response.lead_capture_prompt || null,
        conversation_stage: response.conversation_stage || null,
        lead_info: response.lead_info || null,
      };
    } catch (error) {
      console.error("Chat API Error:", error);

      // Retry logic
      if (retryCount < API_CONFIG.RETRY_ATTEMPTS) {
        console.log(
          `Retrying request (${retryCount + 1}/${API_CONFIG.RETRY_ATTEMPTS})...`
        );
        await this.delay(1000 * (retryCount + 1)); // Progressive delay
        return this.sendMessage(message, retryCount + 1);
      }

      throw new Error(
        error.message ||
          "Failed to send message. Please check your connection and try again."
      );
    }
  }

  // Mock function for local development only
  getMockResponse(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const responses = [
          "Thank you for your interest in Paeonia's innovative spectroscopy solutions! Our Novel Mid-IR Spectrometer offers real-time reaction monitoring with unparalleled precision.",
          "Paeonia's cutting-edge technology enables inline monitoring of chemical processes, helping researchers and industry professionals optimize their workflows.",
          "Our spectrometers are designed for robustness and ease of use, making advanced spectroscopy accessible for various applications in research and industry.",
          "I'd be happy to help you learn more about our products. You can explore our Novel Mid-IR Spectrometer features or contact our team for detailed specifications.",
          "Paeonia Innovation is at the forefront of spectroscopic technology, providing solutions that bridge the gap between research and practical application.",
        ];

        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];

        resolve({
          message: randomResponse,
          source: "mock",
          status: "success",
          role: "assistant",
        });
      }, 1500); // Simulate network delay
    });
  }

  async checkHealth() {
    try {
      // Use mock in development without API URL
      if (
        !process.env.REACT_APP_API_URL &&
        process.env.NODE_ENV === "development"
      ) {
        return {
          ok: true,
          status: "mock",
          timestamp: new Date().toISOString(),
          message: "Using mock responses until backend is deployed",
        };
      }

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HEALTH}`;
      const response = await this.makeRequest(url, { method: "GET" });
      return response;
    } catch (error) {
      console.error("Health check failed:", error);
      return { ok: false, status: "error", message: error.message };
    }
  }

  async getStatus() {
    try {
      // Use mock in development without API URL
      if (
        !process.env.REACT_APP_API_URL &&
        process.env.NODE_ENV === "development"
      ) {
        return {
          ok: true,
          enhanced: true,
          chunks: 0,
          vector_db_loaded: false,
          embedder_loaded: false,
          llm_provider: "mock",
          llm_configured: true,
          status: "mock",
        };
      }

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.STATUS}`;
      const response = await this.makeRequest(url, { method: "GET" });
      return response;
    } catch (error) {
      console.error("Status check failed:", error);
      return { ok: false, status: "error", message: error.message };
    }
  }

  /**
   * Submit lead capture data to Railway backend
   * @param {Object} leadData - Lead information
   * @param {string} leadData.name - Contact name
   * @param {string} leadData.email - Contact email (required)
   * @param {string} leadData.company - Company name
   * @param {string} leadData.phone - Phone number (optional)
   * @param {string} leadData.interest - Interest area or application category
   * @param {string} leadData.source - Lead source identifier (e.g., 'event_form', 'website_chat')
   * @returns {Promise<Object>} Response from backend
   */
  async submitLeadCapture(leadData) {
    try {
      // Use mock in development without API URL
      if (
        !process.env.REACT_APP_API_URL &&
        process.env.NODE_ENV === "development"
      ) {
        console.warn(
          "⚠️ Using mock lead capture. Set REACT_APP_API_URL to connect to Railway backend."
        );
        return {
          success: true,
          message: "Lead captured (mock mode)",
          lead_id: "mock_lead_" + Date.now(),
        };
      }

      const url = `${API_CONFIG.BASE_URL}/api/lead-capture`;

      // Backend expects: { name, email, company, phone, interest, source }
      const payload = {
        name: leadData.name || "",
        email: leadData.email || "",
        company: leadData.company || "",
        phone: leadData.phone || "",
        interest: leadData.interest || "",
        source: leadData.source || "website_chat",
      };

      // Validate required field
      if (!payload.email) {
        throw new Error("Email is required for lead capture");
      }

      const response = await this.makeRequest(url, {
        method: "POST",
        body: JSON.stringify(payload),
        credentials: "include", // Important for CORS with sessions
      });

      return {
        success: true,
        message: response.message || "Lead captured successfully",
        ...response,
      };
    } catch (error) {
      console.error("Lead capture API error:", error);
      throw new Error(
        error.message || "Failed to submit lead. Please try again."
      );
    }
  }

  clearConversation() {
    this.conversationHistory = [];
  }

  getConversationHistory() {
    return [...this.conversationHistory];
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Utility method to update API configuration
  updateConfig(newConfig) {
    Object.assign(API_CONFIG, newConfig);
  }

  // Get current configuration (for debugging)
  getConfig() {
    return { ...API_CONFIG };
  }
}

// Export singleton instance
export const chatApi = new ChatApiService();

// Export configuration for external updates
export const updateChatApiConfig = (config) => {
  chatApi.updateConfig(config);
};

// Export default for easier imports
export default chatApi;

/*
INTEGRATION CHECKLIST FOR RAILWAY BACKEND:
✅ Updated API format to match backend expectations (messages array)
✅ Implemented conversation history management
✅ Added health and status check endpoints
✅ Configured for CORS-enabled backend with credentials
✅ Added proper error handling for backend response format
✅ Using REACT_APP_API_URL environment variable for Railway URL
✅ Mock responses only used in local development

NETLIFY DEPLOYMENT SETUP:
1. Set environment variable in Netlify dashboard:
   - Key: REACT_APP_API_URL
   - Value: https://your-railway-app.up.railway.app (no trailing slash)
2. Redeploy Netlify site after setting environment variable
3. Test chat widget connects to Railway backend

BACKEND API ENDPOINTS:
- POST /api/chat (messages array format)
- GET /api/health (health check)
- GET /api/status (detailed system status)

EXPECTED BACKEND RESPONSE FORMAT:
{
  "role": "assistant",
  "content": "Response text",
  "source": "groq_rag",
  "status": "success"
}

CURRENT CONFIGURATION:
- API URL: ${process.env.REACT_APP_API_URL || 'localhost (dev mode)'}
- Fallback: http://localhost:8000 (for local testing)
*/
