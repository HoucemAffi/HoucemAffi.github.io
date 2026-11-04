# Houcem AFI — Portfolio (FR / EN)

Personal portfolio of **Houcem AFI**, Senior WordPress & Full Stack Developer.

- 🇬🇧 English: https://houcemaffi.github.io/
- 🇫🇷 Français : https://houcemaffi.github.io/fr/

Built with **Astro** + **Tailwind CSS**, design system generated with [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (Trust & Authority pattern, calm-blue palette, bento + glass cards, light/dark mode). Deployed automatically to **GitHub Pages** on every push to `main`.

## Ajouter un projet (2 minutes)

1. Ouvrez `src/data/projects.json` (directement sur github.com → icône crayon ✏️).
2. Copiez un bloc existant et modifiez-le :

```json
{
  "id": "mon-projet",
  "title": "Nom du projet",
  "url": "https://monprojet.com",
  "group": "freelance",
  "year": "2026",
  "featured": false,
  "type": { "fr": "Boutique WooCommerce", "en": "WooCommerce store" },
  "desc": { "fr": "Description en français.", "en": "Description in English." },
  "stack": ["WordPress", "WooCommerce"]
}
```

- `group` : `metam`, `leadiya`, `freelance` ou `earlier` (avant 2022).
- `url` : facultatif — sans URL, le projet s'affiche comme « Projet privé · étude de cas ».
- `featured: true` : la carte prend 2 colonnes.
- `image` (facultatif) : déposez une capture dans `public/projects/` et ajoutez `"image": "/projects/mon-projet.webp"`. Sans image, une capture automatique du site est générée.

3. « Commit changes » → le site est republié automatiquement en ~1 minute.

## Modifier les textes

Tous les textes FR/EN (accroche, expertise, parcours, formation…) sont dans `src/i18n/ui.ts`.

## Domaine personnel (plus tard)

1. Achetez un domaine (ex. `houcemafi.dev`).
2. Créez le fichier `public/CNAME` contenant uniquement le domaine.
3. Dans `astro.config.mjs`, remplacez `site` par `https://houcemafi.dev`.
4. Chez le registrar, ajoutez un enregistrement CNAME `www` → `houcemaffi.github.io` (et les A records GitHub Pages pour le domaine nu).
5. GitHub → Settings → Pages → Custom domain → cochez « Enforce HTTPS ».

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```
