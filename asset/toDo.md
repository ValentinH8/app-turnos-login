# ✅ Checklist de Desarrollo - Sistema de Turnos (Peluquería)

Este archivo sirve como guía técnica para implementar cada User Story.  
Podés ir marcando con `[x]` lo que ya esté completado.  

---

## 👤 Invitado

### 1. Ver información de la peluquería
- [ ] Crear página pública de inicio.  
- [ ] Mostrar información general (nombre, dirección, contacto).  
- [ ] Mostrar lista de empleados y especialidades.  
- [ ] Mostrar horario de atención.  

### 2. Registro de usuario
- [ ] Crear formulario de registro.  
- [ ] Validar campos obligatorios (nombre, apellido, teléfono, email).  
- [ ] Comprobar que el email no esté registrado.  
- [ ] Permitir subir foto de perfil opcional (JPG, PNG).  
- [ ] Guardar usuario en base de datos.  
- [ ] Redirigir a inicio de sesión tras registrarse.  
---

## 👤 Usuario

### 3. Iniciar sesión
- [ ] Crear formulario de login.  
- [ ] Validar email y contraseña.  
- [ ] Mostrar mensaje de error si los datos son incorrectos.  
- [ ] Redirigir al panel del usuario si los datos son correctos.  

### 4. Ver calendario de turnos
- [ ] Crear vista de calendario.  
- [ ] Consultar turnos disponibles desde la base de datos.  
- [ ] Marcar turnos ocupados como no seleccionables.  
- [ ] Actualizar calendario en tiempo real al reservar/cancelar.  

### 5. Reservar turno
- [ ] Permitir seleccionar día, hora y empleado (opcional).  
- [ ] Guardar turno en la base de datos.  
- [ ] Bloquear el turno para que otros no lo reserven.  
- [ ] Mostrar confirmación en pantalla y/o enviar email.  

### 6. Historial de turnos
- [ ] Crear vista de historial para cada usuario.  
- [ ] Mostrar turnos pasados con fecha, servicio y precio.  
- [ ] Asegurar que solo el dueño de la cuenta pueda ver su historial.  
- [ ] Ocultar turnos futuros en el historial.  

### 7. Cancelar turno
- [ ] Agregar opción de cancelar turno en el panel del usuario.  
- [ ] Bloquear cancelación si falta menos de 24h.  
- [ ] Eliminar turno de la agenda del usuario.  
- [ ] Volver a poner turno como disponible en calendario.  
- [ ] Mostrar confirmación de cancelación.  

### 8. Cerrar sesión
- [ ] Agregar botón de “Cerrar sesión” en el panel.  
- [ ] Redirigir a la página pública tras cerrar sesión.  
- [ ] Invalidar sesión (no poder volver con el navegador atrás).  

---
