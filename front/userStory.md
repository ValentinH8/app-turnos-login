# 📌 Sistema de Turnos - Peluquería

## Historias de Usuario (User Stories)

---

### 👤 Rol: Invitado

#### 1. Ver información de la peluquería
- **User Story:**  
  Como invitado, quiero ver la información de la peluquería, los empleados y horarios de atención, para decidir si me interesa sacar un turno.  
- **Criterios de aceptación:**  
  - Se muestra una página pública con información de la peluquería (nombre, dirección, contacto).  
  - Se muestra una lista de empleados y sus especialidades.  
  - Se muestran los horarios generales de atención.  

---

#### 2. Registro de usuario
- **User Story:**  
  Como invitado, quiero poder registrarme con mis datos personales (nombre, apellido, teléfono, email y foto de perfil opcional), para acceder al sistema de turnos como usuario.  
- **Criterios de aceptación:**  
  - El formulario valida campos obligatorios (nombre, apellido, teléfono y email).  
  - El email debe ser único y no estar registrado previamente.  
  - La foto de perfil es opcional y se aceptan formatos JPG o PNG.  
  - Tras registrarse, el usuario puede iniciar sesión.  

---

### 👤 Rol: Usuario

#### 3. Iniciar sesión
- **User Story:**  
  Como usuario registrado, quiero iniciar sesión en la página, para acceder a mis turnos y funcionalidades personalizadas.  
- **Criterios de aceptación:**  
  - El inicio de sesión requiere email y contraseña.  
  - Si los datos son incorrectos, se muestra un mensaje de error.  
  - Si los datos son correctos, el usuario accede a su panel.  

---

#### 4. Ver calendario de turnos
- **User Story:**  
  Como usuario, quiero ver un calendario con los turnos disponibles por día y hora, para poder reservar fácilmente.  
- **Criterios de aceptación:**  
  - El calendario muestra días y horas disponibles según la agenda.  
  - Los turnos ocupados no aparecen como seleccionables.  
  - El calendario se actualiza en tiempo real.  

---

#### 5. Reservar turno
- **User Story:**  
  Como usuario, quiero reservar un turno en la peluquería, para asegurarme la atención en el horario que me convenga.  
- **Criterios de aceptación:**  
  - Se puede seleccionar día, hora y empleado (opcional).  
  - Al confirmar, el turno se registra en el sistema y queda bloqueado.  
  - El usuario recibe confirmación (pantalla o email).  

---

#### 6. Historial de turnos
- **User Story:**  
  Como usuario, quiero ver mi historial de turnos (fecha, servicio y precio), para llevar un registro de mis cortes y gastos.  
- **Criterios de aceptación:**  
  - El historial muestra lista de turnos pasados con fecha, servicio y costo.  
  - Solo el usuario dueño de la cuenta puede ver su historial.  
  - Los turnos futuros no aparecen en el historial.  

---

#### 7. Cancelar turno
- **User Story:**  
  Como usuario, quiero cancelar un turno con al menos un día de anticipación, para liberar el espacio y no generar inconvenientes.  
- **Criterios de aceptación:**  
  - No se permite cancelar si falta menos de 24h.  
  - El turno cancelado desaparece de la agenda del usuario.  
  - El turno vuelve a estar disponible en el calendario.  
  - El usuario recibe confirmación de cancelación.  

---

#### 8. Cerrar sesión
- **User Story:**  
  Como usuario, quiero cerrar sesión en la plataforma, para proteger mis datos personales.  
- **Criterios de aceptación:**  
  - El botón de “Cerrar sesión” está disponible en todo momento.  
  - Al cerrar sesión, se redirige a la página de inicio pública.  
  - La sesión queda invalidada (no se puede volver atrás con el navegador).  
