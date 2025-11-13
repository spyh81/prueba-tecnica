import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../../modules/proyectos/models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor() { }

  obtenerProyectos(): Observable<Proyecto[]> {
    const proyectos: Proyecto[] = [
      {
        id: '1',
        nombre: 'Proyecto Alpha',
        descripcion: 'Descripción del proyecto Alpha',
        fechaInicio: new Date('2024-01-15'),
        fechaFinalizacion: new Date('2024-06-15'),
        empleadosAsignados: ['emp1', 'emp2'],
        tareas: ['tarea1', 'tarea2']
      },
      {
        id: '2',
        nombre: 'Proyecto Beta',
        descripcion: 'Descripción del proyecto Beta',
        fechaInicio: new Date('2025-01-15'),
        fechaFinalizacion: new Date('2025-06-15'),
        empleadosAsignados: ['emp4', 'emp6'],
        tareas: ['tarea3', 'tarea4']
      }

    ]
    return of(proyectos);
  }
}
