import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  columnas = input<string[]>([]);
  datos = input<unknown[]>([]);
}
