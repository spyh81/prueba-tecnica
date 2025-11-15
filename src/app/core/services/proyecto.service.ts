import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../../modules/proyectos/models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proyectos: Proyecto[] = [
    {
      id: '1',
      nombre: 'Proyecto Alpha',
      descripcion: 'Descripción del proyecto Alpha',
      fechaInicio: '2024-01-15',
      fechaFinalizacion: '2024-06-15',
      empleadosAsignados: ['emp1', 'emp2'],
      tareas: ['1', '2']
    },
    {
      id: '2',
      nombre: 'Proyecto Beta',
      descripcion: 'Descripción del proyecto Beta',
      fechaInicio: '2025-01-15',
      fechaFinalizacion: '2025-06-15',
      empleadosAsignados: ['emp4', 'emp6'],
      tareas: ['tarea3', 'tarea4']
    }

  ]

  obtenerProyectos(): Observable<Proyecto[]> {
    return of([...this.proyectos]); // Esto devuelve una copia nueva
  }

  crearProyecto(proyecto: Proyecto): Observable<Proyecto> {
    const id = (this.proyectos.length + 1).toString();
    const nuevoProyecto = { ...proyecto, id };
    this.proyectos.push(nuevoProyecto);
    return of(nuevoProyecto);
  }

  eliminarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    this.proyectos = this.proyectos.filter(p => p.id !== proyecto.id);
    return of(proyecto);
  }

  editarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    this.proyectos = this.proyectos.map(p => p.id === proyecto.id ? { ...proyecto } : p);
    return of(proyecto);
  }
}
