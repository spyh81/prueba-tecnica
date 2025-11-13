export interface Proyecto {
    id: string,
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFinalizacion: Date;
    empleadosAsignados: string[];
    tareas: string[];
}