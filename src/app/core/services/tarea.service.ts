import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarea } from '../../modules/tareas/models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }

  obtenerTareas(): Observable<Tarea[]> {
    const tareas: Tarea[] = [];

    return of(tareas);
  }
}
