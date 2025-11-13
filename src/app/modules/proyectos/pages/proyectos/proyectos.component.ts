import { Component } from '@angular/core';
import { ListadoComponent } from '../../../../shared/listado/listado.component';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../../../core/services/proyecto.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ListadoComponent, CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  constructor(private proyectoService: ProyectoService) { }

  configuracionColumnas = {
    columnas: ['id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFinalizacion', 'acciones'],
    etiquetas: {
      'id': 'Id',
      'nombre': 'Nombre',
      'descripcion': 'Descripción',
      'fechaInicio': 'Fecha Inicio',
      'fechaFinalizacion': 'Fecha Finalización',  // ← Agregar coma aquí
      'acciones': 'Acciones'
    }
  }

  datos$: Observable<Proyecto[]> = this.proyectoService.obtenerProyectos();


  onEditarProyecto(proyecto: Proyecto) {
    console.log('Editar proyecto', proyecto);
    // Ahora puedes acceder a proyecto.nombre, proyecto.id, etc.
  }

  onEliminarProyecto(proyecto: Proyecto) {
    console.log('Eliminar proyecto', proyecto);
    // Ahora puedes acceder a proyecto.id, etc.
  }
}
