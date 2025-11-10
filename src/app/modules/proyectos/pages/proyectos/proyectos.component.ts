import { Component } from '@angular/core';
import { ListadoComponent } from '../../../../shared/listado/listado.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
