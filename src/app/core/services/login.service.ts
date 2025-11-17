import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly CLAVE_ALMACENAMIENTO = 'estaLogueado';
  private readonly CLAVE_USUARIO = 'usuarioActual';

  constructor() { }

  iniciarSesion(usuario: string, contrasena: string): boolean {
    if (usuario === 'admin' && contrasena === 'admin') {
      localStorage.setItem(this.CLAVE_ALMACENAMIENTO, 'true');
      localStorage.setItem(this.CLAVE_USUARIO, usuario);
      return true;
    }
    return false;
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.CLAVE_ALMACENAMIENTO);
    localStorage.removeItem(this.CLAVE_USUARIO);
  }

  estaAutenticado(): boolean {
    return localStorage.getItem(this.CLAVE_ALMACENAMIENTO) === 'true';
  }

  obtenerUsuarioActual(): string | null {
    return localStorage.getItem(this.CLAVE_USUARIO);
  }
}
