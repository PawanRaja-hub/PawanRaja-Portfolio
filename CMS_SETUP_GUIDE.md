# Cloudflare Workers & KV Headless CMS Setup Guide

This guide explains how to deploy your Cloudflare Worker backend and KV storage to enable sub-second live editing of your portfolio content through the Admin Dashboard.

---

## 🚀 Architecture Overview

- **Cloudflare Worker API** (`worker/index.js`): Exposes `/api/portfolio` (public read, auth-protected write) and `/api/auth/login`.
- **Cloudflare KV Namespace** (`PORTFOLIO_KV`): Stores live portfolio JSON data.
- **Admin Dashboard** (`public/admin.html` & `/admin`): Full-featured single-page management dashboard.
- **React Frontend**: Fetches `/api/portfolio` dynamically on load with 30s cache TTL and automatic bundled fallback if offline.

---

## 🛠️ Step-by-Step Deployment Instructions

### Step 1: Log in to Cloudflare with Wrangler
Open your terminal in the project root (`c:\AI-Workspace\PortFolio`) and log in:
```bash
npx wrangler login
```

### Step 2: Create the KV Namespace
Create the KV namespace in Cloudflare:
```bash
npx wrangler kv namespace create PORTFOLIO_KV
```
You will get an output like:
```toml
[[kv_namespaces]]
binding = "PORTFOLIO_KV"
id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

Also create a preview namespace for local testing:
```bash
npx wrangler kv namespace create PORTFOLIO_KV --preview
```

### Step 3: Update `wrangler.toml`
Open [`wrangler.toml`](file:///c:/AI-Workspace/PortFolio/wrangler.toml) and replace the placeholder IDs with your generated IDs:
```toml
[[kv_namespaces]]
binding = "PORTFOLIO_KV"
id = "your_production_kv_id_here"
preview_id = "your_preview_kv_id_here"
```

### Step 4: Set the Admin Password Secret
Set your secret admin password for the dashboard:
```bash
npx wrangler secret put ADMIN_PASSWORD
```
*(When prompted, enter your preferred secret password, e.g. `MySecurePass2026!`)*

### Step 5: Deploy the Worker
Deploy the worker to Cloudflare:
```bash
npx wrangler deploy
```
You will receive your live Worker URL (e.g. `https://pawanraja-portfolio-cms.yoursubdomain.workers.dev`).

---

## 🌐 How to Use the Headless CMS

1. **Access Admin Dashboard**:
   - Open your portfolio site and go to `/admin.html` (e.g. `https://pawanraja-portfolio.rajapawanvalila.workers.dev/admin.html` or `http://localhost:5173/admin.html`).
2. **Log In**:
   - Enter the password you configured in Step 4.
3. **Manage Content**:
   - **Profile & Bio**: Edit name, title, contact details, social links.
   - **Projects**: Add, delete, reorder projects, edit tech tags and repo links.
   - **Skills**: Adjust percentage sliders for backend and database skills.
   - **Experience & Education**: Update job titles, companies, dates, achievements.
   - **Raw JSON**: View or edit the full raw payload with format validation.
4. **Publish**:
   - Click **"Publish Changes"** (top right).
   - Updates are saved to Cloudflare KV and appear on your live portfolio in **< 1 second** globally!

---

## 🔒 Security & Performance Features
- **Zero-Latency First Render**: React frontend initializes from local cache for instant load times.
- **Background Sync**: Checks `/api/portfolio` asynchronously with 30s TTL.
- **Fail-Safe Fallback**: If the network is offline or KV is unreachable, the portfolio automatically falls back to bundled constants without throwing errors.
- **Backup & Restore**: Download `portfolio_backup.json` with one click anytime from the admin dashboard.
