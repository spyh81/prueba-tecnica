import { Component } from '@angular/core';
import { ListadoComponent } from '../../../../shared/listado/listado.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
