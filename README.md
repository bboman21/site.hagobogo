# HAGOBOGO Site

## Local Run

```bash
npm install
npm run dev
```

Development opens the Vite entry at `app.html`.

## Local Preview

Build and open the production site locally with one command:

```bash
npm run local
```

This serves `dist/index.html` on a local HTTP server.

If you prefer double-click execution on macOS, run:

- [preview.command](/Users/chris/development/AntigravityWorks/site_hagobogo/preview.command)

## Build

```bash
npm run build
```

Build output is created in `dist/`.

- `dist/index.html`: main deployment entry for GitHub Pages
- `dist/app.html`: same app entry kept for the local redirect flow
- `index.html`: root redirect file that opens `./dist/index.html` when you run it directly

## GitHub Pages

Use the contents of `dist/` as the published site.

1. Run `npm run build`
2. Create a GitHub repository for the site
3. Upload the files inside `dist/` to the repository root, or copy them into a `docs/` folder if you want Pages to publish from `docs/`
4. In GitHub, open `Settings > Pages`
5. Set `Build and deployment` to `Deploy from a branch`
6. Choose the branch and folder that contains the built files:
   - `/ (root)` if you uploaded the contents of `dist/` to the repo root
   - `/docs` if you copied the contents of `dist/` into `docs/`
7. Save, then wait for the Pages URL to be published

If you open the repository root [index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/index.html) locally, it redirects to the built site automatically.
