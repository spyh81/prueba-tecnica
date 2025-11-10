import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  prueba: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', prueba: 'prueba' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', prueba: 'prueba' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', prueba: 'prueba' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', prueba: 'prueba' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', prueba: 'prueba' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', prueba: 'prueba' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', prueba: 'prueba' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', prueba: 'prueba' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', prueba: 'prueba' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', prueba: 'prueba' },
];

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'prueba'];
  dataSource = ELEMENT_DATA;
}
