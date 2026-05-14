# Skillz Static Site

This project is organized as a simple static website with separated assets and pages.

## Project structure

- `index.html` - main landing page
- `404.html` - not found page for static hosting
- `pages/` - auxiliary pages
  - `about.html`
  - `services.html`
  - `portfolio.html`
  - `contact.html`
- `assets/css/` - Sass and compiled CSS
  - `styles.scss`
  - `styles.css`
- `assets/js/` - client-side JavaScript
  - `script.js`

## How it works

- The main root page is `index.html`.
- Secondary pages are stored under `pages/`.
- CSS and JS files are stored under `assets/` and referenced with the correct relative paths.
- `404.html` is included for static hosting environments that support direct 404 pages.

## Available commands

- `npm run build` - compile `assets/css/styles.scss` to `assets/css/styles.css`
- `npm run watch` - watch the Sass file and recompile automatically
- `npm run dev` - start `live-server` at the project root
- `npm run start` - run both `watch` and `dev` together

## Notes

- If you add new pages, keep the relative asset paths consistent with the `pages/` folder.
- The navigation links in `index.html` point to `pages/*.html`.
- The navigation links on pages within `pages/` use `../index.html` for the home link.
