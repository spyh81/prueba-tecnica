import { Component } from '@angular/core';
import { ListadoComponent } from '../../../../shared/listado/listado.component';
import { Observable } from 'rxjs';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ListadoComponent, CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  constructor(private empleadoService: EmpleadoService) { }

  configuracionColumnas = {
    columnas: ['id', 'nombreCompleto', 'correoElectronico', 'puestoRol', 'proyectosAsignados', 'tareasAsignadas'],
    etiquetas: {
      'id': 'Id',
      'nombreCompleto': 'Nombre Completo',
      'correoElectronico': 'Correo Electronico',
      'puestoRol': 'Puesto/Rol',
      'proyectosAsignados': 'Proyectos Asignados',
      'tareasAsignadas': 'Tareas Asignadas'
    }
  }
  datos$: Observable<Empleado[]> = this.empleadoService.obtenerEmpleados();
}
