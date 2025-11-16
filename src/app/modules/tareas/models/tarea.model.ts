import { EstadoTarea } from "./estadoTarea.enum";

export interface Tarea {
    id: string;
    titulo: string;
    descripcion: string;
    estado: EstadoTarea;
    fechaCreacion: string;
    fechaLimite?: string;
    empleadoAsignadoId?: string;
}