# Lead Capture Integration - Complete ✅

## What Was Integrated

The Paeonia frontend now has **full lead capture capability** integrated with the Railway backend.

### ✅ Features Added

1. **Inline Email Capture** - Shows after 2+ chat messages
2. **Full Lead Form Modal** - Triggers on high-intent keywords (pricing, demo, etc.)
3. **Manual Contact Us Button** - Always available in chat widget
4. **Automatic Backend Integration** - Sends leads to Railway → PostgreSQL → Membrain CRM

---

## Files Modified/Created

### New Files Created:
```
public/
├── lead-capture-widget.css     ← Widget styles
└── lead-capture-widget.js      ← Widget JavaScript logic

src/components/
└── LeadCaptureWidget.jsx       ← React wrapper component
```

### Modified Files:
```
public/
└── index.html                   ← Added CSS/JS references

src/components/
└── ChatWidget.jsx               ← Added lead capture handling + Contact Us button

src/services/
└── chatApi.js                   ← Returns lead_capture_prompt from backend
```

---

## How It Works

```
User types message → Railway Backend analyzes keywords
     ↓
Backend detects: "pricing", "demo", "quote", etc.
     ↓
Backend response includes: { lead_capture_prompt: {...} }
     ↓
ChatWidget.jsx receives response → Calls AIChatbotWidget.handleLeadCapturePrompt()
     ↓
Lead form/email prompt appears → User submits
     ↓
Data sent to Railway /api/lead-capture → PostgreSQL + CRM
```

---

## Testing Locally

### 1. Start Backend

```bash
# In ai_chat repository
cd /Users/davidchen/Documents/Projects/ai_chat
source .venv/bin/activate
python app.py
```

Backend runs at: `http://localhost:8000`

### 2. Start Frontend

```bash
# In paeonia-innovation repository
cd /Users/davidchen/Documents/Projects/paeonia-innovation
npm start
```

Frontend runs at: `http://localhost:3000`

### 3. Test Lead Capture

**Test 1: Email Capture (ENGAGED stage)**
1. Open chat widget
2. Send 2-3 casual messages
3. ✅ Inline email prompt should appear after 2nd message

**Test 2: Full Form (QUALIFIED stage)**
1. Open chat widget
2. Type: "What's your pricing?"
3. ✅ Full lead form modal should pop up

**Test 3: Manual Contact**
1. Open chat widget
2. Click "💬 Contact Us" button
3. ✅ Full lead form should open immediately

---

## Deployment to Netlify

### Environment Variable (Already Set)

The frontend already uses `REACT_APP_API_URL` which is set in Netlify:

```
Key: REACT_APP_API_URL
Value: https://your-railway-app.railway.app
```

No changes needed!

### Deploy Steps

```bash
# Commit changes
git add .
git commit -m "feat: integrate lead capture widget with Railway backend"
git push origin main  # or your branch name

# Netlify will auto-deploy
```

### Verify Deployment

1. Open your Netlify site
2. Open chat widget
3. Type: "I need a demo"
4. Lead form should appear
5. Submit test lead
6. Check Railway admin panel: `https://your-railway-app.railway.app/admin`
7. Verify lead appears in database

---

## Configuration

### Backend Keywords (Already Configured)

The backend detects these 28 high-intent keywords:
- **Pricing**: price, pricing, cost, budget, quote
- **Purchase**: buy, order, purchase
- **Interest**: demo, trial, interested, need, looking for
- **Sales**: schedule, meeting, call, contact, discuss

No changes needed - keywords are already client-agnostic!

### Customize Widget Colors

Edit `public/lead-capture-widget.css`:

```css
:root {
  --ai-chat-primary: #5da9ff;  /* ← Change to Paeonia purple */
  --ai-chat-primary-hover: #4a96e6;
}
```

---

## Lead Data Flow

### 1. User Submits Lead Form

Form collects:
- Name (optional)
- Email (required)
- Company (optional)
- Phone (optional)
- Interest (optional)

### 2. Sent to Railway Backend

```javascript
POST https://your-railway-app.railway.app/api/lead-capture
{
  "email": "user@example.com",
  "name": "John Doe",
  "company": "Acme Corp",
  "phone": "+1234567890",
  "interest": "demo"
}
```

### 3. Backend Saves to Database

- PostgreSQL `conversations` table
- PostgreSQL `sessions` table
- Membrain CRM (if configured)

### 4. Admin Can View Leads

Access: `https://your-railway-app.railway.app/admin`

Endpoints:
- `GET /api/admin/conversations/stats` - Lead statistics
- `GET /api/admin/conversations/recent` - Recent leads
- `GET /api/admin/conversations/export` - Export CSV

---

## Troubleshooting

### Forms Not Showing?

**Check 1: Widget JavaScript Loaded?**
```javascript
// In browser console
console.log(window.AIChatbotWidget);
// Should show the widget object
```

**Check 2: Backend Sending Prompts?**
```javascript
// In browser console, check chat response
// Should include "lead_capture_prompt" field
```

**Check 3: CSS Loaded?**
```bash
# Check browser Network tab
# Look for: lead-capture-widget.css (should be 200 OK)
```

### Backend Not Responding?

**Check 1: API URL Correct?**
```javascript
// In browser console
console.log(process.env.REACT_APP_API_URL);
// Should be: https://your-railway-app.railway.app
```

**Check 2: Backend Running?**
```bash
curl https://your-railway-app.railway.app/api/health
# Should return: {"status": "healthy"}
```

### CORS Errors?

Ensure Railway environment variable is set:
```
FRONTEND_URL=https://your-netlify-site.netlify.app
```

---

## Widget API Reference

### Available Methods

```javascript
// Show email capture manually
window.AIChatbotWidget.showEmailCapture('Custom message');

// Show full lead form
window.AIChatbotWidget.showLeadForm();

// Get current lead data
const leadData = window.AIChatbotWidget.getLeadData();

// Get conversation stage
const stage = window.AIChatbotWidget.getConversationStage();
// Returns: 'ANONYMOUS', 'ENGAGED', 'QUALIFIED', or 'CAPTURED'
```

### Custom Event Listeners

```javascript
// Listen for lead capture events
window.addEventListener('aiChatLeadCaptured', function(event) {
  console.log('Lead captured!', event.detail.leadData);

  // Send to Google Analytics
  gtag('event', 'lead_captured', {
    email: event.detail.leadData.email
  });
});
```

---

## Production Checklist

Before going live:

- [x] Widget CSS and JS copied to `public/` folder
- [x] Widget initialized in `LeadCaptureWidget.jsx`
- [x] ChatWidget handles `lead_capture_prompt` responses
- [x] Contact Us button added to chat interface
- [x] chatApi.js returns lead capture data
- [x] `REACT_APP_API_URL` set in Netlify (already done)
- [ ] Test all 3 lead capture methods (email, form, button)
- [ ] Verify leads appear in Railway admin panel
- [ ] Customize widget colors to match brand
- [ ] Test on mobile devices
- [ ] Test with real Railway backend (not localhost)

---

## Next Steps

1. **Customize Colors**: Edit `lead-capture-widget.css` to match Paeonia brand
2. **Test on Staging**: Deploy to staging environment and test end-to-end
3. **Monitor Leads**: Check Railway admin panel regularly for captured leads
4. **Configure CRM**: Ensure Membrain CRM integration is active (see backend docs)

---

## Support

- **Backend Documentation**: `/Users/davidchen/Documents/Projects/ai_chat/LEAD_CAPTURE_GUIDE.md`
- **Widget Package**: `/Users/davidchen/Documents/Projects/ai_chat/netlify-widget/`
- **Integration Guide**: `/Users/davidchen/Documents/Projects/ai_chat/netlify-widget/INTEGRATION_GUIDE.md`

---

**Status**: ✅ Integration Complete
**Last Updated**: 2025-10-09
**Ready for**: Deployment to Netlify
