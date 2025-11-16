import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoComponent } from '../../../../shared/listado/listado.component';
import { TareaService } from '../../../../core/services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';
import { TareaFormComponent } from '../../components/tarea-form/tarea-form.component';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [ListadoComponent, CommonModule, ModalComponent, TareaFormComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  mostrarModalNuevo = false;
  tareaAEditar: Tarea | null = null;

  constructor(private tareaService: TareaService) { }

  configuracionColumnas = {
    columnas: ['id', 'titulo', 'descripcion', 'estado', 'fechaCreacion', 'acciones'],
    etiquetas: {
      'id': 'Id',
      'titulo': 'Titulo',
      'descripcion': 'Descripción',
      'estado': 'Estado',
      'fechaCreacion': 'Fecha Creación',
      'acciones': 'Acciones'
    }
  }

  datos$: Observable<Tarea[]> = this.tareaService.obtenerTareas();

  nuevaTarea() {
    this.mostrarModalNuevo = true;
  }

  cerrarModal() {
    this.mostrarModalNuevo = false;
    this.tareaAEditar = null;
  }

  alGuardarTarea(tarea: Tarea) {
    if (this.tareaAEditar) {
      const tareaEditada = { ...tarea, id: this.tareaAEditar.id }
      this.tareaService.editarTarea(tareaEditada).subscribe({
        next: () => {
          this.datos$ = this.tareaService.obtenerTareas();
          this.cerrarModal();
        }
      })
    } else {
      this.tareaService.crearTarea(tarea).subscribe({
        next: () => {
          this.datos$ = this.tareaService.obtenerTareas();
          this.cerrarModal();
        }
      })
    }
  }

  alEditarTarea(tarea: Tarea) {
    this.tareaAEditar = tarea;
    this.mostrarModalNuevo = true;
  }

  alEliminarTarea(tarea: Tarea) {
    if (confirm(`¿Estás seguro de eliminar ${tarea.titulo}?`)) {
      this.tareaService.eliminarTarea(tarea).subscribe({
        next: () => {
          this.datos$ = this.tareaService.obtenerTareas();
        }
      });
    }
  }
}
