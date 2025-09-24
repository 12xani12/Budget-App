# Odo Budget — React Budget App (starter)

This is a starter React app (Vite-friendly) for a mobile-friendly budgeting tool that shows accounts, spending vs savings, and a sidebar for account review.  
**Important:** This template does NOT connect to your bank. It includes placeholders and a mock service showing where to implement CommBank (CBA) Open Banking / Consumer Data Right (CDR) integration (see README notes).

## Quick start
1. Install Node.js (v18+ recommended).
2. In this folder run:
   ```
   npm install
   npm run dev
   ```
3. Open the app in a browser or wrap it in a WebView / Capacitor for Android.

## Security & banking notes
- To connect to CommBank or any Australian bank you must use the Consumer Data Right (CDR) / Open Banking APIs and be an *accredited* Data Recipient or use a third-party aggregator (e.g., Basiq, TrueLayer). CommBank publishes developer docs and CDR APIs. See CommBank Developer docs and Open Banking pages for specifics (links in chat). citeturn0search0turn0search11turn0search2
- Do **not** embed bank credentials in client-side code. Use a secure backend for OAuth flows, consent handling, and token storage.

## What's included
- package.json (basic)
- public/index.html
- src/main.jsx, App.jsx
- src/components: Login, Signup, Dashboard, Sidebar
- src/services/api.js (mock)
- styles.css

You can unzip and push this folder to GitHub; include the README and update environment variables and backend before attempting any real bank connections.
