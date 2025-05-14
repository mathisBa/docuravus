---
title: Exemple de docker-compose.yml
sidebar_position: 3
---

```yml
version: "3.7"

services:
  database:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: database
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - 3306:3306
    volumes:
      - ./database:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    restart: always
    depends_on:
      - database
    ports:
      - 80:80
    environment:
      WORDPRESS_DB_HOST: database:3306
      WORDPRESS_DB_USER: user
      WORDPRESS_DB_PASSWORD: password
      WORDPRESS_DB_NAME: database
    volumes:
      - ./wordpress:/var/www/html
```
