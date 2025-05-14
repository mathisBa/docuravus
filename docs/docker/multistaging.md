---
title: Build multi-étape (Multi-stage)
sidebar_position: 6
---

# Build multi-étape

Le multi-stage permet de séparer les étapes de **build** et de **runtime** dans un seul Dockerfile, pour :

- **Réduire** la taille de l’image finale
- **Isoler** les dépendances de développement du conteneur de production
- **Améliorer** la sécurité et la maintenabilité

---

## Principe

1. **Étape de build**
   - On part d’une image de développement (ex : `node:20-alpine`)
   - On installe les dépendances, compile, génère les artefacts
2. **Étape de production**
   - On part d’une image plus légère (ex : `alpine`, `scratch`)
   - On ne copie que les fichiers nécessaires (`binaire`, `libs`, `fichiers statiques`)
   - On définit le point d’entrée

---

## Exemple

```dockerfile
# ---- Étape 1 : build ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Étape 2 : runtime ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copier uniquement le build et les dépendances
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]
```
