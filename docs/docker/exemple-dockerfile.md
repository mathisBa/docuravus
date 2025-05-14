---
title: Exemple de Dockerfile
sidebar_position: 5
---

# Exemple de Dockerfile

Voici un Dockerfile type pour une application Node.js avec build multi-étape :

```dockerfile
# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm ci

# Copier le code et builder
COPY . .
RUN npm run build

# Étape 2 : image de production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copier uniquement le nécessaire
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Exposer le port et démarrer
EXPOSE 3000
CMD ["npm", "run", "start"]
```
