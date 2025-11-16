import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleado } from '../../modules/empleados/models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private readonly STORAGE_KEY = 'empleados';
  private empleados: Empleado[] = [];

  private empleadosIniciales: Empleado[] = [];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  private cargarDesdeLocalStorage(): void {
    const datosGuardados = localStorage.getItem(this.STORAGE_KEY);
    if (datosGuardados) {
      this.empleados = JSON.parse(datosGuardados);
    } else {
      this.empleados = [...this.empleadosIniciales];
      this.guardarEnLocalStorage();
    }
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.empleados));
  }

  obtenerEmpleados(): Observable<Empleado[]> {
    return of([...this.empleados]);
  }

  crearEmpleado(empleado: Empleado): Observable<Empleado> {
    const id = (this.empleados.length + 1).toString();
    const nuevoEmpleado = { ...empleado, id };
    this.empleados = [...this.empleados, nuevoEmpleado];
    this.guardarEnLocalStorage();
    return of(nuevoEmpleado);
  }

  editarEmpleado(empleado: Empleado): Observable<Empleado> {
    this.empleados = this.empleados.map(e =>
      e.id === empleado.id ? empleado : e
    );
    this.guardarEnLocalStorage();
    return of(empleado);
  }

  eliminarEmpleado(id: string): Observable<void> {
    this.empleados = this.empleados.filter(e => e.id !== id);
    this.guardarEnLocalStorage();
    return of(undefined);
  }
}
