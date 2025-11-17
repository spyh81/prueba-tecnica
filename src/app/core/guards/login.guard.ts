import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const loginGuarda: CanActivateFn = (route, state) => {
    const loginService = inject(LoginService);
    const estaAutenticado = loginService.estaAutenticado();
    const router = inject(Router);

    if (estaAutenticado) {
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
};