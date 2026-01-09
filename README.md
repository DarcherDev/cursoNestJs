<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Proyecto de Aprendizaje NestJS

Este repositorio contiene un proyecto diseñado para aprender los fundamentos del framework **NestJS**. A lo largo del desarrollo, se han implementado conceptos clave como controladores, servicios, DTOs, validaciones, conexión a base de datos con Prisma y Docker, y documentación con Swagger.

> **Nota:** En la raíz del proyecto encontrarás un archivo llamado `comandos nestjs.txt` que sirve como "Cheat Sheet" o material de apoyo con los comandos más utilizados durante el desarrollo.

## 🚀 Tecnologías y Herramientas

*   **NestJS**: Framework principal.
*   **PostgreSQL**: Base de datos relacional.
*   **Prisma ORM**: Para la gestión y modelado de la base de datos.
*   **Docker & Docker Compose**: Para contenerizar la base de datos.
*   **Swagger**: Para la documentación de la API.

## 📦 Dependencias Clave

Se han instalado paquetes adicionales para funcionalidades específicas:

*   **Validación de DTOs**:
    ```bash
    npm i class-validator class-transformer
    ```
*   **Documentación (Swagger)**:
    ```bash
    npm install --save @nestjs/swagger
    ```
*   **ORM (Prisma)**:
    ```bash
    npm install prisma --save-dev
    npm install @prisma/client
    ```

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio** e instalar dependencias:
    ```bash
    npm install
    ```

2.  **Configurar Variables de Entorno**:
    Asegúrate de tener un archivo `.env` configurado (puedes basarte en el `docker-compose.yml` para las credenciales).
    ```env
    DATABASE_URL="postgresql://myuser:mypassword@localhost:51214/mydatabase?schema=public"
    ```

3.  **Levantar la Base de Datos (Docker)**:
    ```bash
    docker-compose up -d
    ```

4.  **Sincronizar Prisma**:
    ```bash
    npx prisma migrate dev --name init
    ```

## ▶️ Ejecución

```bash
# Modo desarrollo (con recarga automática)
npm run start:dev

# Modo producción
npm run start:prod
```

La aplicación correrá por defecto en: `http://localhost:3000`
La documentación Swagger estará disponible en: `http://localhost:3000/api` (si se configuró el path global).

## 📄 Material de Apoyo

Recuerda consultar el archivo `comandos nestjs.txt` para ver una lista rápida de comandos útiles para generar módulos, controladores, servicios y manejar la base de datos.

---
<p align="center">
  <a href="http://nestjs.com/" target="blank">Documentación Oficial de NestJS</a>
</p>
