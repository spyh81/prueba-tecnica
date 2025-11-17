import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private loginService: LoginService,
  ) { }

  get nombreUsuario(): string {
    return this.loginService.obtenerUsuarioActual() || 'Usuario';
  }

  cerrarSesion() {
    this.loginService.cerrarSesion();
    window.location.href = '/login'; // Redirige y recarga en un solo paso
  }
}
