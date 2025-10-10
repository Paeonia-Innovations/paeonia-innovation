import React, { useState } from 'react';
import '../styles/lead-capture.css';

const LeadCaptureModals = () => {
  const [emailCaptureVisible, setEmailCaptureVisible] = useState(false);
  const [leadFormVisible, setLeadFormVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: ''
  });

  // Expose functions to window for ChatWidget to call
  React.useEffect(() => {
    window.AIChatbotWidget = {
      showEmailCapture: (message) => {
        setEmailCaptureVisible(true);
      },
      hideEmailCapture: () => {
        setEmailCaptureVisible(false);
      },
      skipEmail: () => {
        setEmailCaptureVisible(false);
      },
      showLeadForm: () => {
        setLeadFormVisible(true);
      },
      closeLeadForm: () => {
        setLeadFormVisible(false);
      },
      showToast: (message, type = 'success') => {
        setToastMessage(message);
        setToastType(type);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 5000);
      },
      closeToast: () => {
        setToastVisible(false);
      },
      handleLeadCapturePrompt: (promptData) => {
        if (promptData.type === 'email_soft' || promptData.type === 'email_qualified') {
          setEmailCaptureVisible(true);
        } else if (promptData.type === 'full_form') {
          setLeadFormVisible(true);
        }
      },
      updateConversationStage: (stage, leadInfo) => {
        console.log('Conversation stage:', stage, leadInfo);
      },
      submitEmail: async () => {
        const emailInput = document.getElementById('aiChatInlineEmail');
        if (!emailInput) return;

        const email = emailInput.value.trim();
        if (!email) {
          window.AIChatbotWidget.showToast('Please enter an email address', 'error');
          return;
        }

        try {
          const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
          const response = await fetch(`${apiURL}/api/lead-capture`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, source: 'inline_email_capture' })
          });

          const data = await response.json();
          if (response.ok && data.success) {
            setEmailCaptureVisible(false);
            window.AIChatbotWidget.showToast('✓ Email saved! We\'ll send you relevant information.', 'success');
          } else {
            throw new Error(data.message || 'Failed to save email');
          }
        } catch (error) {
          console.error('Email capture error:', error);
          window.AIChatbotWidget.showToast('Failed to save email. Please try again.', 'error');
        }
      },
      getLeadData: () => formData,
      getConversationStage: () => 'ANONYMOUS',
      init: (config) => {
        console.log('✅ Lead capture widget initialized', config);
      }
    };
  }, [formData]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      window.AIChatbotWidget.showToast('Email is required', 'error');
      return;
    }

    try {
      const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiURL}/api/lead-capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ...formData, source: 'full_lead_form' })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setLeadFormVisible(false);
        setFormData({ name: '', email: '', company: '', phone: '', interest: '' });
        window.AIChatbotWidget.showToast('✓ Thank you! Our team will be in touch soon.', 'success');
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Lead form error:', error);
      window.AIChatbotWidget.showToast('Failed to submit form. Please try again.', 'error');
    }
  };

  return (
    <>
      {/* Inline Email Capture */}
      {emailCaptureVisible && (
        <div className="ai-chat-email-capture-inline">
          <div className="ai-chat-email-capture-content">
            <p className="ai-chat-email-prompt">
              💡 To save your conversation and send you relevant resources, what's your email?
            </p>
            <div className="ai-chat-email-input-group">
              <input
                type="email"
                id="aiChatInlineEmail"
                placeholder="your@email.com"
                className="ai-chat-email-input"
              />
              <button onClick={() => window.AIChatbotWidget.submitEmail()} className="ai-chat-email-submit-btn">
                Save
              </button>
              <button onClick={() => window.AIChatbotWidget.skipEmail()} className="ai-chat-email-skip-btn">
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Lead Form Modal */}
      {leadFormVisible && (
        <div className="ai-chat-lead-form-overlay" onClick={(e) => e.target === e.currentTarget && setLeadFormVisible(false)}>
          <div className="ai-chat-lead-form-container">
            <div className="ai-chat-lead-form-header">
              <h3>🎯 Let's Connect!</h3>
              <button onClick={() => setLeadFormVisible(false)} className="ai-chat-close-btn">
                &times;
              </button>
            </div>
            <form onSubmit={handleFormSubmit} className="ai-chat-lead-form">
              <div className="ai-chat-form-group">
                <label htmlFor="leadName">Name</label>
                <input
                  type="text"
                  id="leadName"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="ai-chat-form-group">
                <label htmlFor="leadEmail">Email *</label>
                <input
                  type="email"
                  id="leadEmail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="ai-chat-form-group">
                <label htmlFor="leadCompany">Company</label>
                <input
                  type="text"
                  id="leadCompany"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company"
                />
              </div>
              <div className="ai-chat-form-group">
                <label htmlFor="leadPhone">Phone</label>
                <input
                  type="tel"
                  id="leadPhone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                />
              </div>
              <div className="ai-chat-form-group">
                <label htmlFor="leadInterest">What interests you most?</label>
                <select
                  id="leadInterest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="">Select an option</option>
                  <option value="quote">Get a quote</option>
                  <option value="demo">Schedule a demo</option>
                  <option value="specs">Technical specifications</option>
                  <option value="consultation">Speak with an expert</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="ai-chat-form-actions">
                <button type="submit" className="ai-chat-lead-submit-btn">
                  Connect with Sales
                </button>
                <button type="button" onClick={() => setLeadFormVisible(false)} className="ai-chat-lead-cancel-btn">
                  Maybe Later
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastVisible && (
        <div className={`ai-chat-toast ${toastType === 'error' ? 'error' : ''}`}>
          <div className="ai-chat-toast-content">
            <span>{toastMessage}</span>
            <button onClick={() => setToastVisible(false)} className="ai-chat-toast-close">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadCaptureModals;
