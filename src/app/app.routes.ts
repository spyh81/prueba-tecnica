import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "empleados",
        pathMatch: "full"
    },
    {
        path: "empleados",
        loadComponent: () => import('./modules/empleados/pages/empleados/empleados.component').then(
            (m) => m.EmpleadosComponent,
        )
    },
    {
        path: "proyectos",
        loadComponent: () => import('./modules/proyectos/pages/proyectos/proyectos.component').then(
            (m) => m.ProyectosComponent,
        )
    },
    {
        path: "tareas",
        loadComponent: () => import('./modules/tareas/pages/tareas/tareas.component').then(
            (m) => m.TareasComponent,
        )
    },
];
