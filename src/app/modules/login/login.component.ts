import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected login: FormGroup;

  constructor(private _router: Router, private _formBuilder: FormBuilder, private _loginService: LoginService) {
    this.login = this._formBuilder.group({
      usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    })
  }

  alEnviar(): void {
    if (this.login.valid) {
      const { usuario, contrasena } = this.login.value;
      if (this._loginService.iniciarSesion(usuario, contrasena)) {
        this._router.navigate(['/proyectos']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }

    }
  }
}


