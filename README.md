# Excelia

Premium landing page built with Next.js (App Router), Tailwind CSS v4, Barlow + Instrument Serif, and a full-screen ping-pong video hero.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub (see below).
2. In [Vercel](https://vercel.com), choose **Add New Project** and import the GitHub repository **Excelia**.
3. Use the defaults: **Framework Preset** Next.js, **Root Directory** `./`, **Build Command** `npm run build`, **Output** handled automatically.
4. Deploy. Preview and production URLs are created automatically.

Environment variables are not required for this site.

## GitHub repository

After committing locally:

```bash
git remote add origin https://github.com/<your-username>/Excelia.git
git branch -M main
git push -u origin main
```

Or with GitHub CLI:

```bash
gh repo create Excelia --public --source=. --remote=origin --push
```

Replace the repository name if `Excelia` is already taken on your account.
