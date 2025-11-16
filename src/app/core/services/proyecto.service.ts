import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../../modules/proyectos/models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  // Esta es la clave con la que se guardan los datos en LocalStorage
  private readonly STORAGE_KEY = 'proyectos';
  private proyectos: Proyecto[] = [];

  private proyectosIniciales: Proyecto[] = [];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  /**
   * Carga los proyectos desde localStorage o usa datos iniciales
   */
  private cargarDesdeLocalStorage(): void {
    const datosGuardados = localStorage.getItem(this.STORAGE_KEY);

    if (datosGuardados) {
      this.proyectos = JSON.parse(datosGuardados);
    } else {
      // Si no hay datos guardados, usar proyectos iniciales
      this.proyectos = [...this.proyectosIniciales];
      this.guardarEnLocalStorage();
    }
  }

  /**
   * Guarda los proyectos en localStorage
   */
  private guardarEnLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.proyectos));
  }

  obtenerProyectos(): Observable<Proyecto[]> {
    return of([...this.proyectos]); // Esto devuelve una copia nueva
  }

  crearProyecto(proyecto: Proyecto): Observable<Proyecto> {
    const id = (this.proyectos.length + 1).toString();
    const nuevoProyecto = { ...proyecto, id };
    this.proyectos.push(nuevoProyecto);
    this.guardarEnLocalStorage();
    return of(nuevoProyecto);
  }

  eliminarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    this.proyectos = this.proyectos.filter(p => p.id !== proyecto.id);
    this.guardarEnLocalStorage();
    return of(proyecto);
  }

  editarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    this.proyectos = this.proyectos.map(p => p.id === proyecto.id ? { ...proyecto } : p);
    this.guardarEnLocalStorage();
    return of(proyecto);
  }
}
