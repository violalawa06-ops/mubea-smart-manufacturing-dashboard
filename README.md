<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your dashboard

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Public Deployment

This project can be deployed as a static site.

- Vercel configuration: [vercel.json](./vercel.json)
- Netlify configuration: [netlify.toml](./netlify.toml)
- Deployment steps: [DEPLOY.md](./DEPLOY.md)

### Environment variable note

The currently visible dashboard pages do not require a live AI key to render.
If you later enable Gemini-powered insight generation, add `GEMINI_API_KEY` in your hosting platform settings.
