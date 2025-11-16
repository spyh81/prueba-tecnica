import { Component } from '@angular/core';
import { ListadoComponent } from '../../../../shared/listado/listado.component';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { ProyectoFormComponent } from '../../components/proyecto-form/proyecto-form.component';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../../../core/services/proyecto.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ListadoComponent, ModalComponent, ProyectoFormComponent, CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  mostrarModalNuevo = false;
  proyectoAEditar: Proyecto | null = null;

  constructor(private proyectoService: ProyectoService) { }

  configuracionColumnas = {
    columnas: ['id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFinalizacion', 'acciones'],
    etiquetas: {
      'id': 'Id',
      'nombre': 'Nombre',
      'descripcion': 'Descripción',
      'fechaInicio': 'Fecha Inicio',
      'fechaFinalizacion': 'Fecha Finalización',
      'acciones': 'Acciones'
    }
  }

  datos$: Observable<Proyecto[]> = this.proyectoService.obtenerProyectos();

  nuevoProyecto() {
    this.mostrarModalNuevo = true;
  }

  cerrarModal() {
    this.mostrarModalNuevo = false;
    this.proyectoAEditar = null;
  }

  alGuardarProyecto(proyecto: Proyecto) {
    console.log('Guardar proyecto:', proyecto);
    if (this.proyectoAEditar) {
      // Editar proyecto existente
      const proyectoEditado = { ...proyecto, id: this.proyectoAEditar.id };
      this.proyectoService.editarProyecto(proyectoEditado).subscribe({
        next: () => {
          this.datos$ = this.proyectoService.obtenerProyectos();
          this.cerrarModal();
        }
      });
    } else {
      // Crear proyecto nuevo
      this.proyectoService.crearProyecto(proyecto).subscribe({
        next: () => {
          this.datos$ = this.proyectoService.obtenerProyectos();
          this.cerrarModal();
        }
      });
    }
  }

  alEditarProyecto(proyecto: Proyecto) {
    console.log('Editar proyecto', proyecto);

    // Guardar el proyecto a editar y abrir modal
    this.proyectoAEditar = proyecto;
    this.mostrarModalNuevo = true;
  }

  alEliminarProyecto(proyecto: Proyecto) {
    console.log('Eliminar proyecto', proyecto);
    if (confirm(`¿Estás seguro de eliminar el ${proyecto.nombre}?`)) {
      this.proyectoService.eliminarProyecto(proyecto).subscribe({
        next: (proyectoEliminado) => {
          console.log('Proyecto eliminado:', proyectoEliminado);

          // Refrescar la tabla
          this.datos$ = this.proyectoService.obtenerProyectos();
        }
      });
    }
  }
}
