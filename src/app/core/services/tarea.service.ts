import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarea } from '../../modules/tareas/models/tarea.model';
import { EstadoTarea } from '../../modules/tareas/models/estadoTarea.enum';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private tareas: Tarea[] = [];
  private readonly STORAGE_KEY = 'tareas';

  private tareasIniciales: Tarea[] = [];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  private cargarDesdeLocalStorage(): void {
    const datosGuardados = localStorage.getItem(this.STORAGE_KEY);

    if (datosGuardados) {
      this.tareas = JSON.parse(datosGuardados);
    } else {
      // Si no hay datos guardados, usar proyectos iniciales
      this.tareas = [...this.tareasIniciales];
      this.guardarEnLocalStorage();
    }
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tareas));
  }

  obtenerTareas(): Observable<Tarea[]> {
    return of([...this.tareas]);
  }

  crearTarea(tarea: Tarea): Observable<Tarea> {
    const id = (this.tareas.length + 1).toString();
    const nuevaTarea = { ...tarea, id };
    this.tareas.push(nuevaTarea);
    this.guardarEnLocalStorage();
    return of(nuevaTarea);
  }

  eliminarTarea(tarea: Tarea): Observable<Tarea> {
    this.tareas = this.tareas.filter(t => t.id !== tarea.id);
    this.guardarEnLocalStorage();
    return of(tarea);
  }

  editarTarea(tarea: Tarea): Observable<Tarea> {
    this.tareas = this.tareas.map(t => t.id === tarea.id ? { ...tarea } : t);
    this.guardarEnLocalStorage();
    return of(tarea);
  }
}
