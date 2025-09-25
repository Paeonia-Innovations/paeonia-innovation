import React, { useState, useEffect } from 'react';
import { chatApi } from '../services/chatApi';

const ChatTest = () => {
  const [health, setHealth] = useState(null);
  const [status, setStatus] = useState(null);
  const [testMessage, setTestMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Test health and status endpoints
    const runTests = async () => {
      try {
        const healthResult = await chatApi.checkHealth();
        setHealth(healthResult);

        const statusResult = await chatApi.getStatus();
        setStatus(statusResult);
      } catch (error) {
        console.error('Test failed:', error);
      }
    };

    runTests();
  }, []);

  const handleSendTest = async () => {
    if (!testMessage.trim()) return;

    setLoading(true);
    try {
      const result = await chatApi.sendMessage(testMessage);
      setResponse(result);
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Chat API Test Component</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Health Check:</h3>
        <pre>{JSON.stringify(health, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Status Check:</h3>
        <pre>{JSON.stringify(status, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Send Test Message:</h3>
        <input
          type="text"
          value={testMessage}
          onChange={(e) => setTestMessage(e.target.value)}
          placeholder="Type a test message..."
          style={{ width: '300px', padding: '8px' }}
        />
        <button
          onClick={handleSendTest}
          disabled={loading}
          style={{ padding: '8px 16px', marginLeft: '10px' }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>Conversation History:</h3>
        <pre>{JSON.stringify(chatApi.getConversationHistory(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default ChatTest;