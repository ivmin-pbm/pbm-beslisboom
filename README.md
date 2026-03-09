# PBM Beslisboom

Interactieve beslisboom voor laboratoriummedewerkers bij het selecteren van
persoonlijke beschermingsmiddelen (PBM) voor het NF-laboratorium.

De applicatie ondersteunt medewerkers bij het zelfstandig en onderbouwd kiezen
van de juiste PBM's bij het werken met:

- Gevaarlijke stoffen (chemicaliën, nevenproducten)
- Biologische agentia
- Geluid
- Elektrostatische ontlading (ESD)
- Externe lichtbronnen (UV, infrarood, zichtbaar licht)
- Scherpe objecten

> **Let op:** Deze beslisboom is een hulpmiddel en vervangt niet het oordeel
> van een KAM-preventiemedewerker. Bij twijfel altijd overleggen met KAM centraal.

## Gebruik

De applicatie draait via GitHub Pages op:
`https://<github-gebruikersnaam>.github.io/pbm-beslisboom/`

GitHub Pages activeren:
1. Ga naar **Settings → Pages** in je repository
2. Stel **Source** in op **GitHub Actions**
3. Push een wijziging naar de `main`-branch

## Beslisboom aanpassen

De logica van de beslisboom staat in [`decision-tree.yaml`](./decision-tree.yaml).
Een uitgebreide leesbare beschrijving vind je in [`beslisboom.md`](./beslisboom.md).

### Stappen om de logica aan te passen

1. Bewerk `decision-tree.yaml`
2. Converteer naar JSON:
   ```bash
   npm install        # eenmalig
   node scripts/yaml-to-json.mjs
   ```
3. Commit beide bestanden: `decision-tree.yaml` én `frontend/src/assets/decision-tree.json`
4. Push naar `main` → GitHub Actions bouwt en deployt automatisch

## Lokale ontwikkeling

```bash
# Stap 1: installeer root-afhankelijkheden (yaml converter)
npm install

# Stap 2: converteer YAML naar JSON
node scripts/yaml-to-json.mjs

# Stap 3: start de frontend dev server
cd frontend
npm install
npm run dev
```

De app is beschikbaar op `http://localhost:5173/`.

### Alleen de frontend bouwen

```bash
cd frontend
npm run build    # type-check + Vite build
npm run preview  # preview de productie-build lokaal
```

## Projectstructuur

```
pbm-beslisboom/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: bouw + deploy naar GitHub Pages
├── frontend/                   # Vue 3 + Vite applicatie
│   ├── src/
│   │   ├── assets/
│   │   │   └── decision-tree.json  # Gegenereerd uit decision-tree.yaml
│   │   ├── components/
│   │   │   ├── BeslisboomForm.vue  # Hoofdcomponent (flow-controller)
│   │   │   ├── Header.vue
│   │   │   ├── HomePage.vue
│   │   │   ├── Question.vue
│   │   │   └── Conclusion.vue
│   │   ├── models/
│   │   │   └── DecisionTree.ts     # TypeScript interfaces
│   │   ├── App.vue
│   │   └── main.ts
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── scripts/
│   └── yaml-to-json.mjs        # Converter: YAML → JSON
├── beslisboom.md               # Leesbare beschrijving van de beslislogica
├── decision-tree.yaml          # Bronbestand van de beslisboom
├── package.json                # Root: alleen de yaml-converter afhankelijkheden
└── README.md
```

## Technologie

- **[Vue 3](https://vuejs.org/)** – frontend framework
- **[Vite](https://vite.dev/)** – build tool
- **[RVO Component Library CSS](https://github.com/nl-rvo/nl-rvo)** – Nederlandse overheid design system
- **GitHub Actions** – CI/CD voor GitHub Pages deployment

## Licentie

Dit project valt onder de [EUPL-1.2 licentie](./LICENSE).
