import { Component } from '@angular/core';
import { ListadoComponent } from '../../../../shared/listado/listado.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

}
