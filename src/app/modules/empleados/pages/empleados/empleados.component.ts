import { Component } from '@angular/core';
import { ListadoComponent } from '../../../../shared/listado/listado.component';
import { Observable } from 'rxjs';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../../../core/services/empleado.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { EmpleadoFormComponent } from '../../components/empleado-form/empleado-form.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ListadoComponent, CommonModule, ModalComponent, EmpleadoFormComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  mostrarModalNuevo = false;
  empleadoAEditar: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService) { }

  configuracionColumnas = {
    columnas: ['id', 'nombreCompleto', 'correoElectronico', 'puestoRol', 'acciones'],
    etiquetas: {
      'id': 'Id',
      'nombreCompleto': 'Nombre Completo',
      'correoElectronico': 'Correo Electrónico',
      'puestoRol': 'Puesto/Rol',
      'acciones': 'Acciones'
    }
  }

  datos$: Observable<Empleado[]> = this.empleadoService.obtenerEmpleados();

  abrirModalNuevo() {
    this.empleadoAEditar = null;
    this.mostrarModalNuevo = true;
  }

  cerrarModal() {
    this.mostrarModalNuevo = false;
    this.empleadoAEditar = null;
  }

  alGuardarEmpleado(empleado: Empleado) {
    if (this.empleadoAEditar) {
      this.empleadoService.editarEmpleado(empleado).subscribe(() => {
        this.datos$ = this.empleadoService.obtenerEmpleados();
        this.cerrarModal();
      });
    } else {
      this.empleadoService.crearEmpleado(empleado).subscribe(() => {
        this.datos$ = this.empleadoService.obtenerEmpleados();
        this.cerrarModal();
      });
    }
  }

  alEditarEmpleado(empleado: Empleado) {
    this.empleadoAEditar = empleado;
    this.mostrarModalNuevo = true;
  }

  alEliminarEmpleado(empleado: Empleado) {
    if (confirm(`¿Estás seguro de eliminar a ${empleado.nombreCompleto}?`)) {
      this.empleadoService.eliminarEmpleado(empleado.id).subscribe(() => {
        this.datos$ = this.empleadoService.obtenerEmpleados();
      });
    }
  }
}
