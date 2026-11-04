# Sanat portfolio

Buildless HTML/CSS/JavaScript portfolio for Sanat Bogenbaev. Separate from the Book project.

- Preview: `python3 -m http.server 4175 --bind 127.0.0.1`
- Verify: `node test.cjs` and `node --check app.js`.
- All assets are local. Preserve `CNAME` (`bogenbayevsanat.me`). Do not push or deploy without authorization.
- `app.js` exports project data under CommonJS; browser setup runs in the other branch.
- Use native dialogs for project details and the mobile navigation; preserve keyboard focus and reduced-motion support.
- Biographical facts come from the supplied CV and the user's school clarification. Do not invent dates, metrics, employment, or project links.
- Official institutional logos and their sources are in `assets/logos/SOURCES.md`. Lucide UI icons use ISC; technology/social SVG sources and licenses are in `assets/icons/BRAND-SOURCES.md`.
- Keep exactly MedPredict, JobHub and Мұра as selected projects. JobHub's cover is a real homepage capture; no typographic substitute.
- Hero: static generated 3D developer, no build badge or letter monograms. The original photo appears only in a circular About frame. Keep the graphite/teal palette and full, uncropped certificate previews.
