# Portfolio — Sassi De Laat

Site portfolio personnel en HTML/CSS/JS vanilla, conçu pour un déploiement zero-config sur **GitHub Pages**.

## 📁 Structure

```
portfolio/
├── index.html              # Page d'accueil (hero + projets + expériences + contact)
├── about.html              # Page À propos
├── README.md
└── assets/
    ├── style.css           # Tous les styles
    ├── script.js           # Navigation, i18n FR/EN, animations
    ├── CV_Sassi_De_Laat.pdf   # ← À AJOUTER (ton CV)
    └── images/             # ← Images à ajouter (voir ci-dessous)
```

## 🖼️ Images à ajouter

Place ces fichiers dans `assets/images/`. Si un fichier manque, un placeholder élégant s'affichera automatiquement — tu peux donc publier le site même sans toutes les images.

| Fichier | Où il apparaît | Format conseillé | Dimensions |
|---|---|---|---|
| `profile.jpg` | Page À propos, photo ronde | Carré, JPG/PNG | 600 × 600 px |
| `project-property.png` | Projet Property Value Prediction | Paysage | 1200 × 900 px (4:3) |
| `project-assembly.png` | Projet Assembly Simulator | Paysage | 1200 × 900 px (4:3) |
| `project-graph.png` | Projet Graph Theory Toolkit | Paysage | 1200 × 900 px (4:3) |
| `exp-ca.png` | Expérience Crédit Agricole | Paysage | 1200 × 900 px (4:3) |
| `exp-inserm.png` | Expérience INSERM | Paysage | 1200 × 900 px (4:3) |
| `exp-weloveuni.png` | Expérience We Love Uni | Paysage | 1200 × 900 px (4:3) |

**Bannière d'accueil :** le hero utilise un effet de dégradé radial subtil au lieu d'une image — plus léger, plus Apple-like, et surtout ça garde le chargement ultra-rapide. Si tu veux vraiment ajouter une image d'arrière-plan, dis-le moi et je l'intègre.

## 🔗 Liens à personnaliser

Avant de publier, remplace les placeholders dans **`index.html`** ET **`about.html`** :

1. **GitHub** : cherche `https://github.com/` → remplace par l'URL de ton profil (ou celle du repo du projet concerné pour les cards projets)
2. **LinkedIn** : cherche `https://linkedin.com/` → remplace par l'URL de ton profil
3. **CV** : place ton CV en PDF dans `assets/CV_Sassi_De_Laat.pdf` (ou change le nom dans les deux HTML)

## 🚀 Déploiement GitHub Pages

1. Crée un nouveau repo sur GitHub, par exemple `sassi-portfolio` (ou `sassi-de-laat.github.io` si tu veux une URL sans sous-dossier)
2. Push le contenu de ce dossier à la racine du repo :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TON_USERNAME/sassi-portfolio.git
   git push -u origin main
   ```
3. Sur GitHub, va dans **Settings → Pages**
4. Dans "Source", choisis **Deploy from a branch** → branche `main` → dossier `/ (root)` → **Save**
5. Attends ~1 minute, ton site sera en ligne à :
   - `https://TON_USERNAME.github.io/sassi-portfolio/` (si repo nommé `sassi-portfolio`)
   - `https://TON_USERNAME.github.io/` (si repo nommé `TON_USERNAME.github.io`)

## 🛠️ Développement local

Pas de build, pas de serveur obligatoire. Deux options :

- **Option 1 (la plus simple)** : double-clique sur `index.html`, ça s'ouvre dans ton navigateur.
- **Option 2 (recommandée)** : dans VS Code, installe l'extension "Live Server" et clique sur "Go Live" en bas à droite. Le site se rafraîchira automatiquement à chaque sauvegarde.

## 🌍 Système bilingue

Le site est entièrement bilingue FR/EN. Tous les textes sont dans `assets/script.js` dans l'objet `translations`. Pour modifier un texte :

1. Ouvre `script.js`
2. Trouve la clé concernée (ex: `'hero.title.1'`)
3. Modifie la valeur en `fr:` et/ou en `en:`

La langue choisie par l'utilisateur est mémorisée dans le navigateur.

## 🎨 Personnalisation rapide

Toutes les variables de design sont en haut de `assets/style.css` :

```css
:root {
  --color-bg: #fbfbfd;        /* Fond principal */
  --color-ink: #1d1d1f;       /* Texte principal */
  --color-accent: #0071e3;    /* Couleur d'accent (bleu Apple) */
  --font-display: 'Fraunces'; /* Police des titres */
  --font-body: 'Inter Tight'; /* Police du texte */
}
```

---

Conçu avec soin · Paris 🇫🇷
