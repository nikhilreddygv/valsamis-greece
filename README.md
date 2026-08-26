# Valsamis Greece — Site

Single-page brochure site for the Greece branch. Plain HTML/CSS/JS, no build step, no backend, no database.

Live at [valsamis.com.gr](https://valsamis.com.gr), hosted on Netlify, deployed automatically from the `main` branch.

## Structure

- `index.html` — all page content and section markup
- `privacy.html` — privacy policy page
- `assets/css/styles.css` — layout, colors, responsive rules
- `assets/js/script.js` — mobile nav toggle, about-section slideshow, service card flip, footer year
- `assets/img/` — site images (logo, hero background, about-section slideshow photos)
- `assets/img/about-slideshow/` — photos for the About section slideshow; drop new images in here and add the filename to the `slideImages` array in `script.js`

## Preview locally

Open `index.html` directly in a browser, or serve it so relative paths behave exactly like production:

```
npx serve .
```

## Working on this repo

`main` is protected — changes go through a pull request, not a direct push. For any task:

```
git checkout -b your-branch-name
# make changes, commit
git push origin your-branch-name
```

Then open a PR into `main` on GitHub. Netlify deploys automatically once it's merged.

## Open items

- **Services grid** below the current Services section: a "Customers We Work With" logo strip, similar to the one on valsamis.com — needs client logo files before it can be built.
- **HVAC, Projects, and Newsletter sections** were removed from the live site until there's real content for them (previously placeholder-only). Rebuild these once there's actual copy/photos/project entries to put in.
- **Contact form** doesn't submit anywhere yet (`action` attribute is unset) — needs a form-handling backend wired up (Netlify Forms is the planned approach, since the site's already hosted there).
- **Privacy Policy** is currently English-only; a Greek-language version still needs to be added.

## Deploying

Hosted on Netlify, connected to this GitHub repo. Pushing to `main` (via merged PR) triggers an automatic redeploy — no manual deploy steps needed.
