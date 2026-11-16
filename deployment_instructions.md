# Deployment (GitHub Pages)

The site is hosted for free on GitHub Pages at https://tomekczyz.pl and redeploys automatically on every push to `master` (see `.github/workflows/deploy.yml`).

## One-time setup
1. Repo must be public. In *Settings → Pages* set **Source: GitHub Actions** and custom domain `tomekczyz.pl` (enable *Enforce HTTPS*).
2. Contact form uses [Web3Forms](https://web3forms.com): get a free access key for your e-mail and add it in *Settings → Secrets and variables → Actions → New repository secret* as `WEB3FORMS_KEY`.
3. DNS (OVH): four `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `CNAME` `www` → `tomekk001.github.io.`

## Local development
```bash
npm install
echo "VITE_WEB3FORMS_KEY=your-key" > .env.local
npm run dev
```

Static assets (CV, images, `CNAME`) live in `public/`. The `server/` folder is a legacy Express backend and is not used on GitHub Pages.
