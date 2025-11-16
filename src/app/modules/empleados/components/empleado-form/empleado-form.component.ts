import { Component, effect, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empleado } from '../../models/empleado.model';

@Component({
    selector: 'app-empleado-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './empleado-form.component.html',
    styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {

    empleadoInicial = input<Empleado | null>(null);
    guardar = output<Empleado>();
    cancelar = output<void>();

    formulario: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formulario = this.fb.group({
            nombreCompleto: ['', Validators.required],
            correoElectronico: ['', [Validators.required, Validators.email]],
            puestoRol: ['', Validators.required]
        });

        effect(() => {
            const empleado = this.empleadoInicial();
            if (empleado) {
                this.formulario.patchValue({
                    nombreCompleto: empleado.nombreCompleto,
                    correoElectronico: empleado.correoElectronico,
                    puestoRol: empleado.puestoRol
                });
            } else {
                this.formulario.reset();
            }
        });
    }

    alCrear() {
        if (this.formulario.valid) {
            const empleadoActual = this.empleadoInicial();
            const empleado: Empleado = {
                id: empleadoActual?.id || '',
                ...this.formulario.value
            };
            this.guardar.emit(empleado);
            this.formulario.reset();
        }
    }

    alCancelar() {
        this.cancelar.emit();
        this.formulario.reset();
    }
}
