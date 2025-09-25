// Chat API Service for Paeonia Chatbot
// Backend API Documentation: https://your-railway-app.railway.app

// Configuration
const API_CONFIG = {
  // TODO: Replace with actual Railway API URL when deployed
  BASE_URL: 'https://your-railway-app.railway.app', // UPDATE THIS URL
  ENDPOINTS: {
    CHAT: '/api/chat',          // Main chat endpoint
    HEALTH: '/api/health',      // Health check
    STATUS: '/api/status'       // Detailed system status
  },
  HEADERS: {
    'Content-Type': 'application/json'
    // No authentication required for chat endpoints
  },
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 2
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
          ...options.headers
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === 'AbortError') {
        throw new Error('Request timeout - please try again');
      }

      throw error;
    }
  }

  async sendMessage(message, retryCount = 0) {
    try {
      // TODO: Remove this mock response when Railway backend is ready
      if (API_CONFIG.BASE_URL.includes('your-railway-app')) {
        return this.getMockResponse(message);
      }

      // Add user message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: message
      });

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHAT}`;

      // Backend expects messages array format
      const payload = {
        messages: [...this.conversationHistory]
      };

      const response = await this.makeRequest(url, {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      // Add assistant response to conversation history
      if (response.role === 'assistant' && response.content) {
        this.conversationHistory.push({
          role: 'assistant',
          content: response.content
        });
      }

      return {
        message: response.content,
        source: response.source || 'groq_rag',
        status: response.status || 'success',
        role: response.role || 'assistant'
      };

    } catch (error) {
      console.error('Chat API Error:', error);

      // Retry logic
      if (retryCount < API_CONFIG.RETRY_ATTEMPTS) {
        console.log(`Retrying request (${retryCount + 1}/${API_CONFIG.RETRY_ATTEMPTS})...`);
        await this.delay(1000 * (retryCount + 1)); // Progressive delay
        return this.sendMessage(message, retryCount + 1);
      }

      throw new Error(
        error.message || 'Failed to send message. Please check your connection and try again.'
      );
    }
  }

  // TODO: Remove this mock function when Railway backend is ready
  getMockResponse(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const responses = [
          "Thank you for your interest in Paeonia's innovative spectroscopy solutions! Our Novel Mid-IR Spectrometer offers real-time reaction monitoring with unparalleled precision.",
          "Paeonia's cutting-edge technology enables inline monitoring of chemical processes, helping researchers and industry professionals optimize their workflows.",
          "Our spectrometers are designed for robustness and ease of use, making advanced spectroscopy accessible for various applications in research and industry.",
          "I'd be happy to help you learn more about our products. You can explore our Novel Mid-IR Spectrometer features or contact our team for detailed specifications.",
          "Paeonia Innovation is at the forefront of spectroscopic technology, providing solutions that bridge the gap between research and practical application."
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        resolve({
          message: randomResponse,
          source: 'mock',
          status: 'success',
          role: 'assistant'
        });
      }, 1500); // Simulate network delay
    });
  }

  async checkHealth() {
    try {
      // TODO: Remove this mock when Railway backend is ready
      if (API_CONFIG.BASE_URL.includes('your-railway-app')) {
        return {
          ok: true,
          status: 'mock',
          timestamp: new Date().toISOString(),
          message: 'Using mock responses until backend is deployed'
        };
      }

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HEALTH}`;
      const response = await this.makeRequest(url, { method: 'GET' });
      return response;
    } catch (error) {
      console.error('Health check failed:', error);
      return { ok: false, status: 'error', message: error.message };
    }
  }

  async getStatus() {
    try {
      // TODO: Remove this mock when Railway backend is ready
      if (API_CONFIG.BASE_URL.includes('your-railway-app')) {
        return {
          ok: true,
          enhanced: true,
          chunks: 0,
          vector_db_loaded: false,
          embedder_loaded: false,
          llm_provider: 'mock',
          llm_configured: true,
          status: 'mock'
        };
      }

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.STATUS}`;
      const response = await this.makeRequest(url, { method: 'GET' });
      return response;
    } catch (error) {
      console.error('Status check failed:', error);
      return { ok: false, status: 'error', message: error.message };
    }
  }

  clearConversation() {
    this.conversationHistory = [];
  }

  getConversationHistory() {
    return [...this.conversationHistory];
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
✅ Configured for CORS-enabled backend
✅ Added proper error handling for backend response format

REMAINING TODO ITEMS:
1. [ ] Update API_CONFIG.BASE_URL with actual Railway deployment URL
2. [ ] Remove mock response functions when backend is deployed
3. [ ] Test with real backend and verify response handling
4. [ ] Optional: Add request logging for debugging

BACKEND API ENDPOINTS IMPLEMENTED:
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
*/