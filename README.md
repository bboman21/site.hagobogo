# HAGOBOGO Landing Page

## Recommended GitHub Pages Target

Use:

- Branch: `main`
- Folder: `/ (root)`

This repository is already structured for that setup.

- Root [index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/index.html) redirects to [dist/index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/index.html)
- The built site files are committed inside [dist](/Users/chris/development/AntigravityWorks/site_hagobogo/dist)
- `public/.nojekyll` is included so GitHub Pages will not strip underscore-prefixed files if they are added later

GitHub Pages does not publish from `dist/` directly, so `/ (root)` is the correct target for the current repository layout.

## GitHub Pages Setup

1. Open the repository on GitHub.
2. Go to `Settings > Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select branch `main`.
5. Select folder `/ (root)`.
6. Save the setting.
7. Wait for GitHub to publish the Pages URL.

## Build

```bash
npm run build
```

Build output is created in [dist](/Users/chris/development/AntigravityWorks/site_hagobogo/dist).

- [dist/index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/index.html): production entry used by the root redirect
- [dist/app.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/app.html): same app entry kept for the local redirect flow

## Local Development

```bash
npm install
npm run dev
```

Development opens the Vite entry at [app.html](/Users/chris/development/AntigravityWorks/site_hagobogo/app.html).

## Local Production Preview

Run:

```bash
npm run local
```

This builds the site and serves [dist/index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/index.html) over HTTP.

If you prefer double-click execution on macOS, use [preview.command](/Users/chris/development/AntigravityWorks/site_hagobogo/preview.command).
