# 1) Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer toutes les dépendances
RUN npm ci

# Copier tout le code source et builder Docusaurus
COPY . .
RUN npm run build

# 2) Run
FROM nginx:stable-alpine AS runner

# Remplacer la config par défaut (optionnel)
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build généré
COPY --from=builder /app/build /usr/share/nginx/html

# Exposer le port HTTP
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
