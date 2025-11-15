export interface Proyecto {
    id: string,
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFinalizacion: string;
    empleadosAsignados: string[];
    tareas: string[];
}