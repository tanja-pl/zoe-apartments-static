# Zoe Apartments Static Site

This folder contains the standalone static website.

## Local preview

Open `index.html` in your browser.

## Pages

- `index.html` (home)
- `apartment.html` (apartment details via `?id=1|2|3`)
- `contact.html` (contact form)

## Hosting (free/cheap)

### Netlify (free)
1. Go to https://app.netlify.com/drop
2. Drag the **contents** of this folder (not the parent) into the drop zone.
3. Your site is live in a minute.

### GitHub Pages (free)
1. Create a GitHub repo and push this folder.
2. In GitHub: Settings → Pages → Source: `main` / root.
3. Your site is live after build.

### Cloudflare Pages (free)
1. Create a new Pages project.
2. Connect the GitHub repo.
3. Build settings: no build command, output directory `/`.
