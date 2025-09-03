## Usuario
  id_usuario: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  password: string;
  foto_perfil?: string; 
  fecha_registro: Date;

## Trabajadores
  id_empleado: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  horario_inicio: string; //date o time
  horario_fin: string; //date o time

## Servicio
  id_servicio: number;
  nombre_servicio: string;
  descripcion: string;
  precio: number;
  duracion_minutos: number;

  ## Turno
  id_turno: number;
  id_usuario: number;
  id_empleado: number;
  id_servicio: number;
  fecha_turno: Date;
  hora_turno: string;
  estado: 'pendiente' | 'confirmado' | 'cancelado' | 'realizado';
  precio_final: number;