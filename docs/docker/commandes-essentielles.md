---
title: Commandes essentielles Docker
sidebar_position: 4
---

# Commandes de base

## 1. Créer les fichiers

Place dans la racine :

```
node_modules
.env
Dockerfile
docker-compose.yml
```

## 2. Construire l’image

```bash
docker build . -t <votre-nom>/mon-app
```

## 3. Lancer un conteneur

```bash
docker run -p 49160:8080 -d <votre-nom>/mon-app
```

## 4. Accéder à un shell dans le conteneur

```bash
docker exec -it <container_id> /bin/bash
```
