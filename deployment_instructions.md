# Deployment Instructions

This project is set up as a full-stack application with a React frontend and a Node.js/Express backend.

## Structure
- `/` (Root) -> Contains React frontend source.
- `/server` -> Contains the Node.js backend logic.

## Prerequisites
- Node.js installed on your machine.
- A hosting provider (e.g., Vercel, Railway, Render, or a VPS).

## Step 1: Build the Frontend
1. Open your terminal in the root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the production version of the React app:
   ```bash
   npm run build
   ```
   This will create a `dist` (or `build`) folder containing static assets.

## Step 2: Prepare the Backend
1. Move to the server directory (or ensure `server.js` is at the root if you prefer a flat structure).
2. Ensure you have the necessary backend dependencies:
   ```bash
   npm install express cors body-parser
   ```
3. Update `server.js` path configuration if necessary. Currently, it expects the build folder to be at `../dist`.

## Step 3: Deploy to a VPS/PaaS (e.g., Render/Railway)

### Option A: Railway/Render (Easiest)
1. Commit your code to GitHub.
2. Connect your repository to the service.
3. Set the **Build Command** to: `npm install && npm run build`
4. Set the **Start Command** to: `node server/server.js`
5. The platform will install deps, build the React app, and start the Node server which serves the static files.

### Option B: Vercel (Frontend Only + Serverless Functions)
If you want to use Vercel:
1. Move the `server.js` logic to `/api/contact.js` (Vercel Serverless Functions).
2. Deploy the frontend directly from the root.

## Local Development
1. Terminal 1 (Frontend): `npm run dev` (Vite)
2. Terminal 2 (Backend): `node server/server.js`
   *Note: You will need to configure proxy in vite.config.ts to forward /api requests to localhost:3000 during development.*
