# Graph Report - monoDev  (2026-10-08)

## Corpus Check
- 237 files · ~4,277,919 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1672 nodes · 3420 edges · 157 communities (114 shown, 43 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 154 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `10fbd16f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- eslint-plugin-jsx-a11y
- scripts
- e
- route.ts
- Inventarul fișierelor pentru implementarea SEO
- Ki
- worker/index.ts
- qd
- index-CKwsJXdb.js
- AGENTS.md
- eslint.config.mjs
- devDependencies
- start-server.mjs
- trustMetadata
- next.config.ts
- next-env.d.ts
- Q: Descriere publicitară despre catalog și serviciile oferite, maximum 10 propoziții
- @tailwindcss/postcss
- MONO/DEV — raport SEO final
- Q: aici nu vreau sa adaug procent la chirie
- loadSiteModule
- @vitejs/plugin-react
- firebase-client.ts
- proxy.ts
- audit-translations.mjs
- audit-showcase.mjs
- audit-network.mjs
- audit-batches.mjs
- postcss.config.mjs
- MONO/DEV — catalog de proiecte
- Admin
- audit-report.mjs
- audit-catalog.mjs
- serve-audit.mjs
- showcase-audit.md
- audit-recheck.mjs
- audit-interactions-recheck.mjs
- refresh-32-project-covers.mjs
- probe-nord.mjs
- h
- optimize-png-lossless.mjs
- audit-control-source.mjs
- Q: primesc asa eroara la pornire proiect, de ce? middleware-to-proxy internal error getWorkerEntryExportTypes
- probe-nord-product.mjs
- audit-bandwidth.mjs
- Q: pretul vreau sa fie in rand cu titlul, cum era
- probe-nord-dom.mjs
- showcase-archi-actions.test.mjs
- academia/.vite/manifest.json
- flow-crm/.vite/manifest.json
- Q: De ce arata rau /neo-booking/ pe portul 3004, dar bine pe portul 3001?
- medora-clinic/.vite/manifest.json
- Q: cand userul aleje cu servicii sau fara, sa i se afiseze aici ce intra in aceste servicii. Fix textul din i sa se arate
- audit-showcase-locales.mjs
- home-client.tsx
- Audit Network – localhost:3000
- admin-client.tsx
- optimize-images-aggressive.mjs
- netlify-seo.mjs
- Audit Network – localhost:3000
- useCms
- Q: da, fal asa. Dar el trebuie sa stea in drepata in colt sus. si trebuie sa file la ambele butoane in coltul din dreapt asus
- cms-store.ts
- Q: vreau mereu cand deschide un proiect, sa fie default 12 luni selectat; textul Cumpără în rate sa fie cu litere mari totul
- Q: aici textul schimbal in de la
- Q: butonul I fal de 2 ori mai mic
- cabinet/layout.tsx
- live-project-preview.tsx
- showcase-favicons.test.mjs
- admin/page.tsx
- audit-seo.mjs
- Q: cand deschid orice card, popupul nu e vizibil intreg si trebuie scroll stanga-dreapta
- paymentSettingsFromValues
- optimize-project-images.mjs
- zr
- Q: acest buton punel la fel ca in pagina de intrebari
- Q: pe ecrane mai mici, poza proiectului se strica tare, corecteaza ca sa nu se scrice pe nici o dimensiune de ecran
- Q: eu vreau sa fie in 2 randuri si tot o data sa nu se strice pozele la carduri
- trust-page.tsx
- globals
- dependencies
- eslint
- package.json
- Q: analizeaza toate priectele, cee 63, si fiecare imagine din ele, si daca imaginea depastete greutatea de 250 kb, comprima la maxim daca e posibil fara a pierde calitatea ei
- serve-seo.mjs
- eslint-plugin-react-hooks
- Nd
- admin-browser.test.mjs
- cms-registry.mjs
- Q: aici adauga si o rubrica cu reduceri
- SEO_IMPLEMENTATION_REPORT.md
- Arhitectura SEO statică
- Implementarea SEO MONO/DEV
- MONO/DEV — checklist de lansare SEO
- Cercetare și hartă keyword → pagină
- firebase-admin
- Bd
- firebase-tools
- c0
- @next/eslint-plugin-next
- @playwright/test
- react-server-dom-webpack
- Q: in aceste 2 subcategorii pune filtru de cautare proiect
- X0
- @types/node
- @types/react
- typescript
- typescript-eslint
- vinext
- vite
- ar
- @vitejs/plugin-rsc
- wrangler
- authorize-admin.mjs
- Q: de ce nu pot sterge zero?
- rl
- Q: analizeaza cele 24 proiecte, daca toate sunt integral traduse in RO/RU/EN? daca nu, dami lista si ce probleme are.
- @firebase/rules-unit-testing
- Q: asta e posibil de sters din toate cardurile, dar fara sa fie afectat SEO?
- @cloudflare/vite-plugin
- projects/[slug]/view.tsx
- site-config.ts
- generate-seo.mjs
- cloudflare-worker.mjs
- cmsContent
- repository.ts
- Ud
- e1
- eslint-plugin-react
- @eslint/js
- sync-showcase.mjs
- Q: mai verifica din nou toate cele 24 proiecte daca sunt traduse in 3 limibi si lucreaza corect
- Proiecte incluse în catalog
- migrate-frontends-to-next.mjs
- Q: ok. Cand pornesc acest proiect pe portul 3000, automat cand pornesc si alt proiect, se porneste pe perturile disponibile? sau tot pe 3000 se va porni?
- env.d.ts
- integrate-new-projects.mjs

## God Nodes (most connected - your core abstractions)
1. `qd()` - 328 edges
2. `h()` - 61 edges
3. `e()` - 47 edges
4. `zr()` - 46 edges
5. `scripts` - 40 edges
6. `useCms()` - 39 edges
7. `isLocale()` - 31 edges
8. `localePath()` - 31 edges
9. `cmsContent()` - 30 edges
10. `Admin()` - 29 edges

## Surprising Connections (you probably didn't know these)
- `legacyRedirect()` --calls--> `isLocale()`  [EXTRACTED]
  worker/legacy-redirects.ts → app/lib/site-config.ts
- `mediaSlots` --calls--> `getProject()`  [EXTRACTED]
  app/admin/admin-client.tsx → app/lib/project-catalog.ts
- `useCms()` --indirect_call--> `getCmsSnapshot()`  [INFERRED]
  app/components/cms-live.tsx → app/lib/cms-store.ts
- `useCms()` --indirect_call--> `subscribeCms()`  [INFERRED]
  app/components/cms-live.tsx → app/lib/cms-store.ts
- `AutoFitProjectTitle()` --calls--> `useCms()`  [EXTRACTED]
  app/home-client.tsx → app/components/cms-live.tsx

## Import Cycles
- None detected.

## Communities (157 total, 43 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.06
Nodes (31): dist, dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts (+23 more)

### Community 2 - "scripts"
Cohesion: 0.05
Nodes (40): scripts, admin:authorize, audit:bandwidth, audit:batches, audit:browser, audit:catalog, audit:http, audit:interactions:recheck (+32 more)

### Community 3 - "e"
Cohesion: 0.15
Nodes (40): Hd(), ai(), Al(), cs(), di(), dn(), Et(), Fu() (+32 more)

### Community 4 - "route.ts"
Cohesion: 0.39
Nodes (5): getDb(), GET(), POST(), toRouteErrorMessage(), notes

### Community 5 - "Inventarul fișierelor pentru implementarea SEO"
Cohesion: 0.15
Nodes (12): Artefacte locale generate și excluse din Git, Capturi reale noi ale proiectelor (23), Cod și stiluri (51), Configurație și fișiere SEO publice (10), Documentație (5), Iconuri și corecturi ale demo-urilor (5), Inventarul fișierelor pentru implementarea SEO, Modificări preexistente păstrate (+4 more)

### Community 6 - "Ki"
Cohesion: 0.10
Nodes (29): ct(), D0(), Gc(), id(), Is(), jc(), jo(), Ke() (+21 more)

### Community 7 - "worker/index.ts"
Cohesion: 0.25
Nodes (4): Env, ExecutionContext, worker, legacyRedirect()

### Community 8 - "qd"
Cohesion: 0.05
Nodes (74): qd(), A0(), Aa(), ad(), An(), bs(), Ca(), cd() (+66 more)

### Community 9 - "index-CKwsJXdb.js"
Cohesion: 0.08
Nodes (25): af, am, cm(), ef, em, Fd, Id, Jd (+17 more)

### Community 12 - "devDependencies"
Cohesion: 0.29
Nodes (7): drizzle-kit, devDependencies, drizzle-kit, tailwindcss, @types/react-dom, tailwindcss, @types/react-dom

### Community 14 - "start-server.mjs"
Cohesion: 0.17
Nodes (10): devLockPath, extraArgs, findAvailablePort(), hasExplicitHost, portIsAvailable(), refreshScript, root, server (+2 more)

### Community 15 - "trustMetadata"
Cohesion: 0.11
Nodes (13): trustMetadata(), TrustPage(), TrustPageProps, dynamicParams, generateMetadata(), dynamicParams, generateMetadata(), dynamicParams (+5 more)

### Community 18 - "Q: Descriere publicitară despre catalog și serviciile oferite, maximum 10 propoziții"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: Descriere publicitară despre catalog și serviciile oferite, maximum 10 propoziții, Source Nodes

### Community 20 - "MONO/DEV — raport SEO final"
Cohesion: 0.18
Nodes (11): Activarea SEO în viitor, Baza inițială și protejarea modificărilor, Cercetare și strategie comercială, Dimensiuni și aspect, Fișiere și motive, Limite rămase, MONO/DEV — raport SEO final, Măsurare, autoritate și pași următori (+3 more)

### Community 21 - "Q: aici nu vreau sa adaug procent la chirie"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: aici nu vreau sa adaug procent la chirie, Source Nodes

### Community 22 - "loadSiteModule"
Cohesion: 0.17
Nodes (12): digest(), gardenSources, generateProjectCardImages(), previewSources, widths, cache, loadSiteModule(), { getProject } (+4 more)

### Community 25 - "firebase-client.ts"
Cohesion: 0.19
Nodes (8): config, createServices(), firebaseConfigured, firebaseMessage(), resolveFirebaseConfig(), config, env, snapshot

### Community 27 - "audit-translations.mjs"
Cohesion: 0.13
Nodes (10): catalog, catalogIds, copyBlocks, gardenIds, issues, legacyDescriptionIds, legacyDetailIds, numericKeysIn() (+2 more)

### Community 28 - "audit-showcase.mjs"
Cohesion: 0.12
Nodes (11): args, base, cache, controlLimit, explicitPaths, only, output, phase (+3 more)

### Community 29 - "audit-network.mjs"
Cohesion: 0.22
Nodes (9): args, base, concurrency, kind(), measure(), output, recommendation(), registry (+1 more)

### Community 30 - "audit-batches.mjs"
Cohesion: 0.20
Nodes (9): args, output, persist(), registry, run, selected, worker(), workers (+1 more)

### Community 34 - "MONO/DEV — catalog de proiecte"
Cohesion: 0.07
Nodes (25): Catalog, Limitele demonstrațiilor, Refacerea celor 32 de proiecte, Surse și întreținere, Verificare, Administrarea MONO/DEV, Configurare pentru producție, Conținut, imagini și prețuri (+17 more)

### Community 35 - "Admin"
Cohesion: 0.17
Nodes (15): Admin(), adminHref(), adminLocation(), clearAdminDraft(), draftKey(), fieldLabel(), hasAdminDraftForCategory(), nextInstallmentMonths() (+7 more)

### Community 36 - "audit-report.mjs"
Cohesion: 0.22
Nodes (7): details(), entries, escape(), fixes, registry, root, summary

### Community 37 - "audit-catalog.mjs"
Cohesion: 0.50
Nodes (3): expectedProjects, report, retry

### Community 38 - "serve-audit.mjs"
Cohesion: 0.50
Nodes (3): mime, port, roots

### Community 42 - "audit-interactions-recheck.mjs"
Cohesion: 0.40
Nodes (3): args, base, only

### Community 43 - "refresh-32-project-covers.mjs"
Cohesion: 0.50
Nodes (3): output, projects, registry

### Community 46 - "h"
Cohesion: 0.10
Nodes (42): C(), J(), Bi(), Bl(), Bu(), ci(), dd(), Ed() (+34 more)

### Community 47 - "optimize-png-lossless.mjs"
Cohesion: 0.33
Nodes (5): collect(), defaultBinary, files, isPng(), root

### Community 48 - "audit-control-source.mjs"
Cohesion: 0.33
Nodes (3): findings, registry, skipped

### Community 49 - "Q: primesc asa eroara la pornire proiect, de ce? middleware-to-proxy internal error getWorkerEntryExportTypes"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: primesc asa eroara la pornire proiect, de ce? middleware-to-proxy internal error getWorkerEntryExportTypes, Source Nodes

### Community 52 - "audit-bandwidth.mjs"
Cohesion: 0.25
Nodes (6): byKind, limits, oversized, publicRoot, records, total

### Community 55 - "Q: pretul vreau sa fie in rand cu titlul, cum era"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: pretul vreau sa fie in rand cu titlul, cum era, Source Nodes

### Community 61 - "academia/.vite/manifest.json"
Cohesion: 0.05
Nodes (45): app/page.tsx, file, imports, isDynamicEntry, name, src, _framework-D_rUT4EX.js, file (+37 more)

### Community 62 - "flow-crm/.vite/manifest.json"
Cohesion: 0.05
Nodes (45): app/page.tsx, file, imports, isDynamicEntry, name, src, _framework-D_rUT4EX.js, file (+37 more)

### Community 64 - "Q: De ce arata rau /neo-booking/ pe portul 3004, dar bine pe portul 3001?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: De ce arata rau /neo-booking/ pe portul 3004, dar bine pe portul 3001?, Source Nodes

### Community 65 - "medora-clinic/.vite/manifest.json"
Cohesion: 0.05
Nodes (45): app/page.tsx, file, imports, isDynamicEntry, name, src, _framework-D_rUT4EX.js, file (+37 more)

### Community 67 - "Q: cand userul aleje cu servicii sau fara, sa i se afiseze aici ce intra in aceste servicii. Fix textul din i sa se arate"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: cand userul aleje cu servicii sau fara, sa i se afiseze aici ce intra in aceste servicii. Fix textul din i sa se arate, Source Nodes

### Community 68 - "audit-showcase-locales.mjs"
Cohesion: 0.29
Nodes (4): locales, projects, registry, report

### Community 69 - "home-client.tsx"
Cohesion: 0.06
Nodes (58): delivery, GardenCopy, gardenDescriptions(), GardenDetail, gardenDetails(), GardenProject, gardenProjects, headings (+50 more)

### Community 70 - "Audit Network – localhost:3000"
Cohesion: 0.40
Nodes (4): Audit Network – localhost:3000, Candidați de optimizare, Catalog, Toate proiectele

### Community 71 - "admin-client.tsx"
Cohesion: 0.08
Nodes (22): activeAdminDrafts, AdminNavigationCategory, AdminUrlState, catalog, discountPercentages, DiscountStatusFilter, discountStatusFilters, DraftImage (+14 more)

### Community 72 - "optimize-images-aggressive.mjs"
Cohesion: 0.17
Nodes (10): after, before, changed, concurrency, extensions, files, optimize(), results (+2 more)

### Community 73 - "netlify-seo.mjs"
Cohesion: 0.23
Nodes (12): demoDirectories(), demoHtmlPaths(), visit(), generateNetlifySeo(), legacyRedirectRules(), normalizeDemoRobots(), renderHeaders(), technicalPayloadPaths() (+4 more)

### Community 74 - "Audit Network – localhost:3000"
Cohesion: 0.40
Nodes (4): Audit Network – localhost:3000, Candidați de optimizare, Catalog, Toate proiectele

### Community 75 - "useCms"
Cohesion: 0.14
Nodes (28): BrandLogo(), BrandLogoProps, CabinetPage(), content, useCms(), faqSchema(), FooterLinks(), labels (+20 more)

### Community 76 - "Q: da, fal asa. Dar el trebuie sa stea in drepata in colt sus. si trebuie sa file la ambele butoane in coltul din dreapt asus"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: da, fal asa. Dar el trebuie sa stea in drepata in colt sus. si trebuie sa file la ambele butoane in coltul din dreapt asus, Source Nodes

### Community 77 - "cms-store.ts"
Cohesion: 0.08
Nodes (31): ProjectStatusControl(), toggle(), CatalogPrice(), CmsOrganization(), empty, CmsMedia(), organizationSchema(), metadata (+23 more)

### Community 78 - "Q: vreau mereu cand deschide un proiect, sa fie default 12 luni selectat; textul Cumpără în rate sa fie cu litere mari totul"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: vreau mereu cand deschide un proiect, sa fie default 12 luni selectat; textul Cumpără în rate sa fie cu litere mari totul, Source Nodes

### Community 79 - "Q: aici textul schimbal in de la"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: aici textul schimbal in de la, Source Nodes

### Community 80 - "Q: butonul I fal de 2 ori mai mic"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: butonul I fal de 2 ori mai mic, Source Nodes

### Community 82 - "live-project-preview.tsx"
Cohesion: 0.50
Nodes (3): projectCardImages, gardenPreviewSources, StaticProjectPreview()

### Community 83 - "showcase-favicons.test.mjs"
Cohesion: 0.40
Nodes (3): registry, root, visibleProjects

### Community 85 - "audit-seo.mjs"
Cohesion: 0.30
Nodes (11): auditProduction(), auditSeo(), exists(), expectedRoutes(), exportedFile(), flattenSchemas(), HREFLANG, LOCALES (+3 more)

### Community 86 - "Q: cand deschid orice card, popupul nu e vizibil intreg si trebuie scroll stanga-dreapta"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: cand deschid orice card, popupul nu e vizibil intreg si trebuie scroll stanga-dreapta, Source Nodes

### Community 87 - "paymentSettingsFromValues"
Cohesion: 0.67
Nodes (3): finiteSetting(), paymentSettingsFromValues(), readPaymentItems()

### Community 88 - "optimize-project-images.mjs"
Cohesion: 0.07
Nodes (37): apply, audit, candidates, concurrency, decodedFingerprint(), fileHash(), imageExtensions, includeSourceImages (+29 more)

### Community 89 - "zr"
Cohesion: 0.12
Nodes (36): au(), br(), Cc(), Dc(), dr(), Dt(), _e(), ei() (+28 more)

### Community 90 - "Q: acest buton punel la fel ca in pagina de intrebari"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: acest buton punel la fel ca in pagina de intrebari, Source Nodes

### Community 91 - "Q: pe ecrane mai mici, poza proiectului se strica tare, corecteaza ca sa nu se scrice pe nici o dimensiune de ecran"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: pe ecrane mai mici, poza proiectului se strica tare, corecteaza ca sa nu se scrice pe nici o dimensiune de ecran, Source Nodes

### Community 92 - "Q: eu vreau sa fie in 2 randuri si tot o data sa nu se strice pozele la carduri"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: eu vreau sa fie in 2 randuri si tot o data sa nu se strice pozele la carduri, Source Nodes

### Community 93 - "trust-page.tsx"
Cohesion: 0.17
Nodes (12): TrustView(), Category, FAQ, romanianCategories, CategorySource, english, russian, translatedFaqCategories (+4 more)

### Community 95 - "dependencies"
Cohesion: 0.13
Nodes (15): drizzle-orm, firebase, framer-motion, lucide-react, magic-string, dependencies, drizzle-orm, firebase (+7 more)

### Community 97 - "package.json"
Cohesion: 0.29
Nodes (6): engines, node, name, private, type, version

### Community 98 - "Q: analizeaza toate priectele, cee 63, si fiecare imagine din ele, si daca imaginea depastete greutatea de 250 kb, comprima la maxim daca e posibil fara a pierde calitatea ei"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: analizeaza toate priectele, cee 63, si fiecare imagine din ele, si daca imaginea depastete greutatea de 250 kb, comprima la maxim daca e posibil fara a pierde calitatea ei, Source Nodes

### Community 99 - "serve-seo.mjs"
Cohesion: 0.40
Nodes (4): compress, mime, port, root

### Community 103 - "Nd"
Cohesion: 0.22
Nodes (12): Cd(), h(), L(), Nd(), h(), L(), x(), yl() (+4 more)

### Community 105 - "cms-registry.mjs"
Cohesion: 0.25
Nodes (10): add(), catalog, flatten(), groups, labels, literal(), result, scan() (+2 more)

### Community 106 - "Q: aici adauga si o rubrica cu reduceri"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: aici adauga si o rubrica cu reduceri, Source Nodes

### Community 108 - "Arhitectura SEO statică"
Cohesion: 0.25
Nodes (8): Arhitectura SEO statică, Controlul indexării și redirecturi, Date structurate și limitări, Generarea build-ului, Imaginile cardurilor, Politica actuală de indexare — 10 septembrie 2026, URL-uri și limbi, Validarea configurației Netlify

### Community 109 - "Implementarea SEO MONO/DEV"
Cohesion: 0.25
Nodes (8): Ce necesită proprietarul, Ce s-a implementat, Export și controlul indexării, Fișiere, Implementarea SEO MONO/DEV, Performanță măsurată și limite, URL-uri și sitemap, Verificări

### Community 110 - "MONO/DEV — checklist de lansare SEO"
Cohesion: 0.29
Nodes (7): Analytics: configurare explicită și consimțământ, Google Business Profile, Google Search Console și alte instrumente, MONO/DEV — checklist de lansare SEO, Netlify și verificări după un deploy autorizat, Priorități 30 / 60 / 90 de zile, Înainte de publicare

### Community 111 - "Cercetare și hartă keyword → pagină"
Cohesion: 0.50
Nodes (4): Ce s-a implementat și ce necesită validare, Cercetare și hartă keyword → pagină, Constatări pe limbi, Distribuția intențiilor

### Community 113 - "Bd"
Cohesion: 0.40
Nodes (6): Bd(), p(), D(), pt(), Yd(), p()

### Community 115 - "c0"
Cohesion: 0.36
Nodes (13): bc(), c0(), gn(), H0(), Lt(), mf(), Ru(), su() (+5 more)

### Community 119 - "Q: in aceste 2 subcategorii pune filtru de cautare proiect"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: in aceste 2 subcategorii pune filtru de cautare proiect, Source Nodes

### Community 120 - "X0"
Cohesion: 0.11
Nodes (27): at(), co(), Cu(), da(), dm(), du(), gm(), hf() (+19 more)

### Community 127 - "ar"
Cohesion: 0.11
Nodes (29): _0(), Ac(), Ae(), ar(), bo(), ce(), dl(), ee() (+21 more)

### Community 132 - "Q: de ce nu pot sterge zero?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: de ce nu pot sterge zero?, Source Nodes

### Community 134 - "rl"
Cohesion: 0.11
Nodes (34): _a(), ao(), bd(), Ea(), eo(), fo(), fr(), G0() (+26 more)

### Community 135 - "Q: analizeaza cele 24 proiecte, daca toate sunt integral traduse in RO/RU/EN? daca nu, dami lista si ce probleme are."
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: analizeaza cele 24 proiecte, daca toate sunt integral traduse in RO/RU/EN? daca nu, dami lista si ce probleme are., Source Nodes

### Community 138 - "Q: asta e posibil de sters din toate cardurile, dar fara sa fie afectat SEO?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: asta e posibil de sters din toate cardurile, dar fara sa fie afectat SEO?, Source Nodes

### Community 140 - "projects/[slug]/view.tsx"
Cohesion: 0.18
Nodes (19): CmsLive(), projectSold(), getProject(), publicProjects, isProjectSeoEnabled(), LocalizedProject, projectMetadata(), projectStructuredData() (+11 more)

### Community 142 - "site-config.ts"
Cohesion: 0.09
Nodes (34): HtmlDocument(), breadcrumbSchema(), JsonLd(), serializeJsonLd(), websiteSchema(), metadata, metadata, viewport (+26 more)

### Community 143 - "generate-seo.mjs"
Cohesion: 0.40
Nodes (5): entries, { indexablePaths }, { locales, canonicalUrl, alternateLanguages, siteConfig }, paths, xml()

### Community 144 - "cloudflare-worker.mjs"
Cohesion: 0.17
Nodes (11): args, assetsDirectory, configPath, headerPath, headerRules, redirectsPath, result, root (+3 more)

### Community 145 - "cmsContent"
Cohesion: 0.27
Nodes (10): AnalyticsConsent(), text, ContactPage(), analyticsConsentKey, AnalyticsEvent, trackEvent(), Window, cmsContent() (+2 more)

### Community 146 - "repository.ts"
Cohesion: 0.33
Nodes (12): assertCatalogDocument(), imageTypes, maxImageBytes, readDocument(), readDocuments(), saveDocument(), saveDocuments(), seedDocuments() (+4 more)

### Community 147 - "Ud"
Cohesion: 0.17
Nodes (13): cf(), ft(), Tl(), Hl(), yl(), Ud(), Cl(), ft() (+5 more)

### Community 150 - "e1"
Cohesion: 0.33
Nodes (7): e1(), Nl(), x(), nm(), At(), uf(), um()

### Community 162 - "sync-showcase.mjs"
Cohesion: 0.06
Nodes (38): registry, root, normalizeNextExport(), normalizeArchiNavigation(), normalizeShowcaseInteractions(), walk(), writeProjectPreview(), ensureShowcaseFavicon() (+30 more)

### Community 179 - "Q: mai verifica din nou toate cele 24 proiecte daca sunt traduse in 3 limibi si lucreaza corect"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: mai verifica din nou toate cele 24 proiecte daca sunt traduse in 3 limibi si lucreaza corect, Source Nodes

### Community 302 - "Q: ok. Cand pornesc acest proiect pe portul 3000, automat cand pornesc si alt proiect, se porneste pe perturile disponibile? sau tot pe 3000 se va porni?"
Cohesion: 0.40
Nodes (4): Answer, Outcome, Q: ok. Cand pornesc acest proiect pe portul 3000, automat cand pornesc si alt proiect, se porneste pe perturile disponibile? sau tot pe 3000 se va porni?, Source Nodes

### Community 1516 - "integrate-new-projects.mjs"
Cohesion: 0.14
Nodes (13): catalogPath, catalogRoot, configs, folders, known, pagePath, pathEntries, priceByDomain (+5 more)

## Knowledge Gaps
- **633 isolated node(s):** `dynamicParams`, `dynamicParams`, `dynamicParams`, `dynamicParams`, `dynamicParams` (+628 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **43 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Work-memory lessons

**Preferred sources** — corroborated by past sessions; start here.
- `Admin()` (3× useful, score=1.676334217) _(code changed — re-verify)_
- `paymentSettings` (2× useful, score=1.117996316) _(code changed — re-verify)_
- `home-client.tsx` (2× useful, score=1.117558275) _(code changed — re-verify)_
- `ProjectVisual()` (2× useful, score=1.093796097) _(code changed — re-verify)_
- `i18n.ts` (2× useful, score=1.011291669) _(code changed — re-verify)_
- `sync-showcase.mjs` (2× useful, score=0.996622413)
- `projectSlugs` (2× useful, score=0.929637508) _(code changed — re-verify)_

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `qd()` connect `qd` to `e`, `rl`, `Nd`, `Ki`, `index-CKwsJXdb.js`, `h`, `Bd`, `Ud`, `c0`, `X0`, `zr`, `ar`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `@vitejs/plugin-rsc`, `eslint-plugin-jsx-a11y`, `wrangler`, `@firebase/rules-unit-testing`, `@cloudflare/vite-plugin`, `@tailwindcss/postcss`, `eslint-plugin-react`, `@vitejs/plugin-react`, `@eslint/js`, `globals`, `eslint`, `package.json`, `eslint-plugin-react-hooks`, `firebase-admin`, `firebase-tools`, `@next/eslint-plugin-next`, `@playwright/test`, `react-server-dom-webpack`, `@types/node`, `@types/react`, `typescript`, `typescript-eslint`, `vinext`, `vite`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `isLocale()` connect `site-config.ts` to `worker/index.ts`, `useCms`, `projects/[slug]/view.tsx`, `cms-store.ts`, `trustMetadata`, `cmsContent`, `trust-page.tsx`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Are the 20 inferred relationships involving `qd()` (e.g. with `ad()` and `cd()`) actually correct?**
  _`qd()` has 20 INFERRED edges - model-reasoned connections that need verification._
- **Are the 18 inferred relationships involving `e()` (e.g. with `ao()` and `ci()`) actually correct?**
  _`e()` has 18 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `zr()` (e.g. with `A0()` and `a()`) actually correct?**
  _`zr()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `dynamicParams`, `dynamicParams`, `dynamicParams` to the rest of the system?**
  _633 weakly-connected nodes found - possible documentation gaps or missing edges._