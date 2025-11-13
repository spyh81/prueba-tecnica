import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoComponent } from '../../../../shared/listado/listado.component';
import { TareaService } from '../../../../core/services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [ListadoComponent, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  constructor(private tareaService: TareaService) { }

  configuracionColumnas = {
    columnas: ['id', 'titulo', 'descripcion', 'estado', 'fechaCreacion'],
    etiquetas: {
      'id': 'Id',
      'titulo': 'Titulo',
      'descripcion': 'Descripción',
      'estado': 'Estado',
      'fechaCreacion': 'Fecha Creación'
    }
  }

  datos$: Observable<Tarea[]> = this.tareaService.obtenerTareas();
}
