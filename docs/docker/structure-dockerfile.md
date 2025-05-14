---
title: Structure d’un Dockerfile
sidebar_position: 3
---

# Structure d’un Dockerfile

1. **FROM** : image de base (ex : `node:20-alpine`, `python:3.11-slim`)
2. **WORKDIR** `/app` : répertoire de travail dans le conteneur
3. **COPY** : copie des fichiers (respecte le `.dockerignore`)
4. **RUN** : exécution de commandes au build (installations, générateurs…)
5. **ENV** : définition de variables d’environnement
6. **EXPOSE** : port exposé par le conteneur
7. **CMD** : commande à lancer au démarrage
