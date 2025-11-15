import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  titulo = input<string>('Modal');
  cerrar = output<void>();

  alCerrar() {
    this.cerrar.emit();
  }

  alClickFondo(event: Event) {
    // Solo cerrar si se hace click en el fondo, no en el contenido
    if (event.target === event.currentTarget) {
      this.alCerrar();
    }
  }
}
