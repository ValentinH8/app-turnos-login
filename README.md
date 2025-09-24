<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>README</title>
</head>
<body>

    <h1>Sistema de Reservas para Peluquería 💈</h1>
    <p>Este proyecto es el <strong>backend</strong> de una aplicación completa para la gestión de turnos de una peluquería. Fue diseñado para ofrecer una solución robusta y escalable que permita a los clientes reservar y gestionar sus citas de forma sencilla.</p>

    <h2>🚀 Características Principales</h2>
    <ul>
        <li><strong>Autenticación y Autorización:</strong> Sistema completo de registro e inicio de sesión con roles de usuario (<code>cliente</code> y <code>administrador</code>).</li>
        <li><strong>Gestión de Turnos:</strong> <code>API</code> para crear, ver y cancelar citas.</li>
        <li><strong>Panel de Administración:</strong> Acceso para el administrador para visualizar, gestionar y confirmar todos los turnos.</li>
        <li><strong>Base de Datos Relacional:</strong> La información se almacena de forma segura y estructurada en una base de datos SQL.</li>
        <li><strong>Código Limpio:</strong> La arquitectura del backend fue diseñada para ser escalable y fácil de mantener.</li>
    </ul>

    <h2>💻 Tecnologías del Backend</h2>
    <ul>
        <li><strong>Node.js:</strong> Entorno de ejecución del servidor.</li>
        <li><strong>Express:</strong> Framework web para la creación de <code>APIs RESTful</code>.</li>
        <li><strong>TypeScript:</strong> Lenguaje de programación tipado para un código más robusto y sin errores.</li>
        <li><strong>SQL:</strong> <code>PostgreSQL</code> (reemplazar por la base de datos que uses).</li>
        <li><strong>TypeORM:</strong> ORM (Object-Relational Mapper) para la gestión de la base de datos de forma fácil y eficiente.</li>
        <li><strong>JWT:</strong> Para la autenticación segura de usuarios.</li>
    </ul>

    <h2>🛠️ Cómo Instalar y Ejecutar el Proyecto</h2>
    <h3>Requisitos</h3>
    <ul>
        <li>Node.js</li>
        <li>Una instancia de base de datos SQL</li>
    </ul>

    <h3>Pasos</h3>
    <ol>
        <li>Clona el repositorio: <code>git clone https://aws.amazon.com/es/what-is/repo/</code></li>
        <li>Accede a la carpeta del proyecto: <code>cd [nombre-de-la-carpeta]</code></li>
        <li>Instala las dependencias: <code>npm install</code></li>
        <li>Crea un archivo <code>.env</code> en la raíz del proyecto y agrega tus variables de entorno (ej. credenciales de la base de datos, <code>JWT_SECRET</code>).</li>
        <li>Ejecuta las migraciones para crear las tablas de la base de datos: <code>npm run typeorm:run-migrations</code></li>
        <li>Inicia el servidor en modo de desarrollo: <code>npm run dev</code></li>
    </ol>
    <p>El servidor se ejecutará en <code>http://localhost:3000</code>.</p>

    <h2>🤝 Contribuciones</h2>
    <p>Siéntete libre de abrir un <strong>issue</strong> para reportar bugs o sugerir mejoras. ¡Toda contribución es bienvenida!</p>

</body>
</html>
