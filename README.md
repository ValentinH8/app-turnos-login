

Backend de una aplicación de gestión de turnos para una barbería. Este proyecto fue desarrollado para un cliente real y me ayudó a consolidar mis habilidades como desarrollador Full Stack.

## Tecnologías Utilizadas

- **Backend**: `Node.js` (Express)
- **Lenguaje**: `TypeScript`
- **Base de datos**: `SQL` (especificar cuál, ej. PostgreSQL)
- **ORM**: `TypeORM`
- **Frontend**: `React` (no se incluye en este repo)


## Características

- Autenticación y autorización de usuarios (cliente y administrador).
- Gestión de turnos: Reservar, ver, cancelar.
- Panel de administración para ver todos los turnos.

## Instalación y Uso

1. Clona el repositorio: `git clone https://aws.amazon.com/es/what-is/repo/`
2. Instala las dependencias: `npm install`
3. Configura la base de datos y las variables de entorno.
4. Ejecuta las migraciones: `npm run migration:run`
5. Inicia el servidor: `npm run dev`

---

### Opción 2: README con más detalles y estructura

```markdown
# Sistema de Reservas para Peluquería 💈

Este proyecto es el backend de una aplicación completa para la gestión de turnos de una peluquería. Fue diseñado para ofrecer una solución robusta y escalable que permita a los clientes reservar y gestionar sus citas de forma sencilla.

## 🚀 Características Principales

- **Autenticación y Autorización**: Sistema completo de registro e inicio de sesión con roles de usuario (`cliente` y `administrador`).
- **Gestión de Turnos**: `API` para crear, ver y cancelar citas.
- **Panel de Administración**: Acceso para el administrador para visualizar, gestionar y confirmar todos los turnos.
- **Base de Datos Relacional**: La información se almacena de forma segura y estructurada en una base de datos SQL.
- **Código Limpio**: La arquitectura del backend fue diseñada para ser escalable y fácil de mantener.

## 💻 Tecnologías del Backend

- **Node.js**: Entorno de ejecución del servidor.
- **Express**: Framework web para la creación de `APIs RESTful`.
- **TypeScript**: Lenguaje de programación tipado para un código más robusto y sin errores.
- **SQL**: `PostgreSQL` (reemplazar por la base de datos que uses).
- **TypeORM**: ORM (Object-Relational Mapper) para la gestión de la base de datos de forma fácil y eficiente.
- **JWT**: Para la autenticación segura de usuarios.
- **Docker**: Contenedorización para facilitar el despliegue del proyecto.

## 🛠️ Cómo Instalar y Ejecutar el Proyecto

### Requisitos

- Node.js
- Una instancia de base de datos SQL

### Pasos

1.  Clona el repositorio: `git clone https://aws.amazon.com/es/what-is/repo/`
2.  Accede a la carpeta del proyecto: `cd [nombre-de-la-carpeta]`
3.  Instala las dependencias: `npm install`
4.  Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno (ej. credenciales de la base de datos, `JWT_SECRET`).
5.  Ejecuta las migraciones para crear las tablas de la base de datos: `npm run typeorm:run-migrations`
6.  Inicia el servidor en modo de desarrollo: `npm run dev`

El servidor se ejecutará en `http://localhost:3000`.

## 🤝 Contribuciones

Siéntete libre de abrir un **issue** para reportar bugs o sugerir mejoras. ¡Toda contribución es bienvenida!
