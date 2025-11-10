import { EstadoTarea } from "./estadoTarea.enum";

export interface Tarea {
    id: string;
    titulo: string;
    descripcion: string;
    estado: EstadoTarea;
    fechaCreacion: Date;
    fechaLimite?: Date;
    empleadoAsignadoId?: string;
}