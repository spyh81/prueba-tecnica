import { Component, input, output } from '@angular/core';
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
  datos = input<object[]>([]);
  etiquetas = input<{ [key: string]: string }>({});

  editar = output<object>();
  eliminar = output<object>();

  onEditar(elemento: object) {
    this.editar.emit(elemento);
  }

  onEliminar(elemento: object) {
    this.eliminar.emit(elemento);
  }
}
