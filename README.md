# Valsamis Greece — Site

Single-page brochure site for the Greece branch, modeled on valsamis.com. Plain HTML/CSS/JS, no build step, no backend, no database.

## Preview locally

Open `index.html` directly in a browser, or serve it so relative paths behave exactly like production:

```
npx serve .
```

## Structure

- `index.html` — all page content and section markup
- `assets/css/styles.css` — layout, colors, responsive rules
- `assets/js/script.js` — mobile nav toggle, footer year
- `assets/img/` — placeholder SVGs to swap for real photos

## Replacing placeholder content

Every spot that needs real Greece-branch info is marked `[PLACEHOLDER ...]` in `index.html`. Search for `PLACEHOLDER` to find them all:

- Contact info (phone, email, address) in the top bar and Contact section
- About Us copy (overview, mission/vision, personnel, premises)
- Real photos in `assets/img/` (replace the `.svg` placeholders with `.jpg`/`.png` and update the `src` attributes in `index.html`)
- Projects section — swap in actual project names/photos
- Form `action` attributes for Newsletter and Contact — point these at whatever form-handling service you choose (e.g. Formspree, Getform) since there's no backend here to receive submissions

## Deploying

Any static host works (Netlify, Vercel, GitHub Pages, or plain shared hosting via FTP) — upload the folder as-is once `valsamis.com.gr` is pointed at it.
