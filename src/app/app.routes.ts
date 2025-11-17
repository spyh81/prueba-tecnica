import { Routes } from '@angular/router';
import { loginGuarda } from './core/guards/login.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        loadComponent: () =>
            import("./modules/login/login.component").then(
                (m) => m.LoginComponent,
            )
    },
    {
        path: "empleados",
        loadComponent: () => import('./modules/empleados/pages/empleados/empleados.component').then(
            (m) => m.EmpleadosComponent,
        ), canActivate: [loginGuarda],
    },
    {
        path: "proyectos",
        loadComponent: () => import('./modules/proyectos/pages/proyectos/proyectos.component').then(
            (m) => m.ProyectosComponent,
        ), canActivate: [loginGuarda],
    },
    {
        path: "tareas",
        loadComponent: () => import('./modules/tareas/pages/tareas/tareas.component').then(
            (m) => m.TareasComponent,
        ), canActivate: [loginGuarda],
    },
];
