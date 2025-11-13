import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleado } from '../../modules/empleados/models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  obtenerEmpleados(): Observable<Empleado[]> {
    const empleados: Empleado[] = [];

    return of(empleados);
  }
}
