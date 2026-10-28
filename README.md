# Portfolio GitHub Pages — Enzo Quattrochi

Site statique (HTML, CSS, JavaScript), responsive, en français, sans framework ni installation.

## Publication

1. Sur GitHub, créer le dépôt public `QuattrochiEnzo.github.io`.
2. Déposer **le contenu de ce dossier** à la racine du dépôt : `index.html`, `styles.css`, `script.js`, `assets/` et `README.md` (pas le dossier parent).
3. Dans **Settings > Pages > Build and deployment**, sélectionner **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
4. Vérifier `https://quattrochienzo.github.io/` après publication.

## Personnalisation avant publication

- **Liens des projets** : les cinq cartes redirigent actuellement vers le profil GitHub général. Remplacer chaque `href="https://github.com/QuattrochiEnzo"` dans les cartes de `index.html` par l'URL du dépôt correspondant, après création ou vérification.
- **CV** : pour ajouter un bouton CV, déposer `cv.pdf` à la racine et ajouter un lien `<a href="cv.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>` (non présent par défaut, car le fichier CV n'a pas été fourni).
- **LinkedIn** : ajouter l'URL exacte de votre profil si souhaité (non inventée).
- **Projets, dates et textes** : relire les descriptions et ajuster selon les réalisations que vous souhaitez rendre publiques.
- **Identité visuelle** : modifier les variables de couleurs en tête de `styles.css`.

## Tester localement

Ouvrir `index.html` directement dans un navigateur. Aucun serveur n'est requis.

## Structure

- `index.html` : contenu du portfolio, référencement et liens
- `styles.css` : style sombre, responsive
- `script.js` : menu mobile, effets d'apparition et année du pied de page
- `assets/favicon.svg` : icône d'onglet

Aucun service externe ni cookie de suivi utilisé.
