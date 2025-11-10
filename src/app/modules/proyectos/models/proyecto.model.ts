export interface Proyecto {
    id: string;
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    fechaEstimadaFinalizacion: Date;
    empleadosAsignados: string[];
    tareas: string[];
}