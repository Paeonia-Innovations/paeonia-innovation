# Chat Widget Integration Setup

## ✅ What Was Done

### 1. **Brought Chat Widget from Client's Branch**
- Fetched `feat/ai_chatbot` branch from upstream (original client repo)
- Branch contains:
  - `ChatWidget.jsx` - Main chat component
  - `ChatWidget.css` - Styles
  - `chatApi.js` - API service
  - Integration into `App.js`

### 2. **Configured for Railway Backend**
Updated `src/services/chatApi.js`:
- ✅ Uses `REACT_APP_API_URL` environment variable
- ✅ Fallback to `http://localhost:8000` for local dev
- ✅ Mock responses only in development mode
- ✅ Added `credentials: 'include'` for CORS with sessions
- ✅ Smart detection of Railway backend vs mock mode

### 3. **Created Environment Configuration**
- Created `.env.example` with instructions
- Documents both local and Netlify deployment

## 🚀 Next Steps for Deployment

### For the Client (When They Fork Your Backend Repo):

#### **Step 1: Deploy Backend to Railway**
Follow instructions in `CLIENT_INTEGRATION_GUIDE.md` (in the `ai_chat` repo)

1. Fork the `ai_chat` backend repository
2. Deploy to Railway
3. Set all required environment variables
4. Get Railway URL (e.g., `https://ai-chat-production-abc123.up.railway.app`)

#### **Step 2: Configure Netlify Frontend**

1. Go to Netlify Dashboard
2. Navigate to: **Site settings → Environment variables**
3. Add new variable:
   ```
   Key: REACT_APP_API_URL
   Value: https://their-railway-url.up.railway.app
   ```
   ⚠️ **Important:** No trailing slash!

4. **Trigger new deploy** in Netlify (env var changes require redeploy)

#### **Step 3: Merge This Branch**
```bash
# On their website repo
git checkout main
git merge feat/ai_chatbot
git push origin main
```

Netlify will auto-deploy with the new chat widget.

## 🧪 Testing

### Local Testing (Before Deploying):
```bash
# In the website repo
cp .env.example .env.local

# Edit .env.local:
REACT_APP_API_URL=http://localhost:8000

# Start local backend (in ai_chat repo):
python app.py

# Start frontend (in paeonia-innovation repo):
npm start
```

### Production Testing (After Deploying):
1. Open website: `https://their-site.netlify.app`
2. Click chat widget button
3. Send a test message
4. Verify response comes from Railway backend (not mock)

## 📁 Files Changed

```
src/
├── services/
│   └── chatApi.js          ← Updated for Railway integration
├── components/
│   ├── ChatWidget.jsx      ← Chat UI component (from upstream)
│   ├── ChatWidget.css      ← Styles (from upstream)
│   └── ChatTest.jsx        ← Test component (from upstream)
└── App.js                  ← Added ChatWidget (from upstream)

.env.example                ← NEW: Environment variable documentation
```

## 🔧 Configuration Details

### API Endpoints Used:
- `POST /api/chat` - Send messages
- `GET /api/health` - Health check
- `GET /api/status` - System status

### Environment Variables:
- **Frontend (Netlify):**
  - `REACT_APP_API_URL` - Railway backend URL

- **Backend (Railway):**
  - See `.env.example` in `ai_chat` repo
  - Includes: API keys, admin credentials, CRM config, etc.

### CORS Configuration:
Backend already configured to allow:
- `https://*.netlify.app`
- `https://*.netlify.com`
- Custom domain (via `FRONTEND_URL` env var)

## 📚 Documentation

- **For Client Setup:** See `CLIENT_INTEGRATION_GUIDE.md` in the `ai_chat` repository
- **For Backend Deployment:** See `README.md` in the `ai_chat` repository
- **For Frontend Env Vars:** See `.env.example` in this repository

## 🐛 Troubleshooting

### Chat shows mock responses in production:
- ✅ Check `REACT_APP_API_URL` is set in Netlify
- ✅ Redeploy Netlify after adding env var
- ✅ Check browser console for API URL being used

### CORS errors:
- ✅ Verify `FRONTEND_URL` is set in Railway backend
- ✅ Ensure Railway backend is deployed and running
- ✅ Check Railway logs for CORS errors

### "Failed to fetch" errors:
- ✅ Verify Railway backend URL is correct
- ✅ Check Railway backend is healthy: `https://railway-url/api/health`
- ✅ Check browser Network tab for failed requests

---

**Current Status:** ✅ Ready for deployment

**Your Fork:** `davidamo9/paeonia-innovation` (branch: `feat/ai_chatbot`)

**Client's Repo:** `Paeonia-Innovations/paeonia-innovation`

**Next Action:** Client needs to:
1. Deploy backend to Railway
2. Set `REACT_APP_API_URL` in Netlify
3. Merge `feat/ai_chatbot` to their main branch
