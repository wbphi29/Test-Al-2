# Deployment Guide for Plesk

This project is a React application built with Vite. To deploy it on Plesk at `https://alelectricite.be/`, follow these steps:

## 1. Prerequisites
- Ensure Node.js is installed on your Plesk server.
- The domain `alelectricite.be` should be set up in Plesk.

## 2. GitHub Integration
- In Plesk, go to **Git** and add your repository URL.
- Set the branch to `main` (or your production branch).
- Enable **Enable Git hooks** or manual pull.

## 3. Build Configuration
Vite generates a static build in the `dist/` folder. You have two options for deployment:

### Option A: Build on Server (Recommended)
1. In Plesk, go to **Node.js**.
2. Set the **Document Root** to `/httpdocs/dist` (or wherever your `dist` folder will be).
3. Set the **Application Mode** to `production`.
4. Run **NPM Install**.
5. Run **NPM Build** (or `npx vite build`).

### Option B: Build Locally and Commit `dist`
If you cannot run Node.js build on Plesk:
1. Run `npm run build` locally.
2. Remove `dist/` from `.gitignore`.
3. Commit and push the `dist/` folder to GitHub.
4. In Plesk, set the **Document Root** to `/dist`.

## 4. Environment Variables
If you use any API keys (like `GEMINI_API_KEY`), add them in the Plesk Node.js settings or create a `.env` file in the root directory on the server.

## 5. Post-Deployment Commands
If you are using **Option A**, you can add a "Post-deployment command" in the Git settings:
```bash
npm install && npm run build
```

## 6. Troubleshooting "Old Content"
If you still see old content after deployment:
1. **Clear Plesk Cache**: If you use Nginx caching or a CDN (like Cloudflare), purge the cache.
2. **Verify Document Root**: Ensure Plesk is pointing to the `dist` folder, not the root folder.
3. **Check Build Artifacts**: Log in via FTP/SSH and verify that the files in `dist/` have the latest timestamps.
