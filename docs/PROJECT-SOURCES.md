# Portfolio project sources

Read from the public GitHub repositories on 2026-11-05. Only the listed public assets were downloaded; repositories were not cloned. Assets are unmodified.

## MedPredict

Sources:
- https://github.com/bsanat/MedPredict/blob/main/README.md
- https://github.com/bsanat/MedPredict/blob/main/package.json
- https://github.com/bsanat/MedPredict/blob/main/docs/design/README.md

Verified facts: Astana IT University diploma/educational prototype. The repository describes Sanat Bogenbaev's frontend contribution: UX/UI, React + TypeScript, localization (kk/ru/en), forms and validation, typed API adapter, PDF export, browser checks. Uses React, TypeScript, Vite and jsPDF; Vitest and Playwright are test tooling. Backend Java/Spring Boot and the model belong to other team members. It is not a clinically validated system; fixed demonstration results do not constitute an actual model prediction.

Suggested Kazakh card text: «Медициналық көрсеткіштермен жұмыс істеуге арналған дипломдық оқу прототипінің frontend бөлігі. Үш тілдегі интерфейс, форма валидациясы, API-адаптер және PDF экспорт.»

The README identifies the `docs/ux/screenshots` images as real UI captures of the `figma-design` branch snapshot (`d55ab67`); that expanded UI is not the one-page main branch implementation. Do not label these as screenshots of the current main branch. `docs/design/concept.png` is explicitly AI-generated concept artwork and was not downloaded.

| Local file | Dimensions | Direct public source |
| --- | --- | --- |
| `medpredict-home.png` | 1440 × 1347 | https://raw.githubusercontent.com/bsanat/MedPredict/main/docs/ux/screenshots/01-home-desktop.png |
| `medpredict-form.png` | 1440 × 1276 | https://raw.githubusercontent.com/bsanat/MedPredict/main/docs/ux/screenshots/02-prediction-empty.png |
| `medpredict-logo.png` | 994 × 414 | https://raw.githubusercontent.com/bsanat/MedPredict/main/public/logo.png |

## JobHub

Sources:
- https://github.com/bsanat/JobHub/blob/main/README.md
- https://github.com/bsanat/JobHub/blob/main/frontend/package.json
- https://github.com/bsanat/JobHub/blob/main/backend/go.mod
- https://github.com/bsanat/JobHub/blob/main/docs/assets/screenshots.md

Verified facts: Job board for Kazakhstan with Kazakh and Russian interfaces. Vacancy/company catalog and search; applicant and employer accounts; saved jobs, PDF resumes and applications; employers publish/manage vacancies and review applicants; Telegram publication is documented. Frontend: React, TypeScript, Vite, TanStack Query, React Router, i18next; backend: Go, Gin, pgx; PostgreSQL data layer. The README's storage/auth infrastructure sections are not fully internally consistent (Supabase table vs newer Neon configuration), so omit provider-specific hosting/auth/storage claims from the portfolio.

Suggested Kazakh card text: «Қазақстандағы жұмыс іздеушілер мен жұмыс берушілерге арналған веб-платформа. Вакансиялар мен компанияларды іздеу, жеке кабинеттер, өтінімдер және PDF түйіндеме.»

The public repository's `docs/assets/screenshots.md` explicitly states that UI screenshots have not been added. The following are logo/illustration assets, not interface screenshots. Repository metadata gives https://jobhub-lovat.vercel.app as its homepage; the deployed UI was not opened or checked in this subtask.

| Local file | Dimensions | Direct public source |
| --- | --- | --- |
| `jobhub-logo.png` | 600 × 187 | https://raw.githubusercontent.com/bsanat/JobHub/main/frontend/public/brand/jobhub-logo.png |
| `jobhub-skyline.png` | 1774 × 887 | https://raw.githubusercontent.com/bsanat/JobHub/main/frontend/public/illustrations/jobhub-astana-skyline.png |

No public metrics, clinical efficacy claims, or completed full-stack/model integration are inferred. No asset reuse license was established by this read; these are project-owner repository assets for the owner's portfolio.
