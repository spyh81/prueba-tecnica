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
      // Aquí comprobamos que localStorage exista antes de ser usado
      // Podremos hacer uso del localStorage en cualquier entorno (Node.js, SSR, etc)
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.CLAVE_ALMACENAMIENTO, 'true');
        localStorage.setItem(this.CLAVE_USUARIO, usuario);
      }
      return true;
    }
    return false;
  }

  cerrarSesion(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.CLAVE_ALMACENAMIENTO);
      localStorage.removeItem(this.CLAVE_USUARIO);
    }
  }

  estaAutenticado(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.CLAVE_ALMACENAMIENTO) === 'true';
    }
    return false;
  }

  obtenerUsuarioActual(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.CLAVE_USUARIO);
    }
    return null;
  }
}
