# Documentation Docuravus

Ce dépôt contient la documentation de **Docuravus** générée par Docusaurus, ainsi que la configuration pour la servir via Docker/Nginx.

---

## 🚀 Prérequis

- **Node.js** 20 et **npm** ou **Yarn**
- **Docker** (optionnel pour la version containerisée)

---

## 🔧 Lancement en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/mon-orga/mon-repo.git
cd mon-repo

# 2. Installer les dépendances
npm install
# ou avec Yarn
# yarn

# 3. Démarrer le serveur de dev
npm run start

Ouvre ensuite http://localhost:3000

Toute modification dans docs/, src/ ou docusaurus.config.js recharge automatiquement la page.
```

# Générer les fichiers statiques

npm run build

# (Optionnel) Tester le build en local

npm run serve

Le contenu statique est dans le dossier build/.
Le serveur de npm run serve utilise serve pour afficher le résultat sur http://localhost:3000.

# Version Docker

Pour déployer la doc dans un container Docker + Nginx :

## Construire l’image

```bash
docker build -t mon-docs-site .
```

## Lancer le conteneur

```bash
docker run -d \
 --name docs-site \
 -p 80:80 \
 mon-docs-site
```

## Accéder à la documentation

Ouvre http://localhost

## Structure du projet

```bash
.
├── docs/                 # Markdown de la doc
├── src/
│   ├── components/       # Composants React (ex: HomepageFeatures)
│   └── pages/            # Pages statiques (ex: index.tsx pour la home)
├── Dockerfile            # Build & runner Nginx
├── nginx.conf            # Configuration Nginx pour servir build/
├── .dockerignore         # Fichiers à ignorer lors du build Docker
├── docusaurus.config.js  # Config principale du site
├── sidebars.ts           # Structure de la sidebar
└── package.json

```
