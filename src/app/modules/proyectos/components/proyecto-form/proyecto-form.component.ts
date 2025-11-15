import { CommonModule } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Proyecto } from '../../models/proyecto.model';

@Component({
  selector: 'app-proyecto-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './proyecto-form.component.html',
  styleUrl: './proyecto-form.component.css'
})
export class ProyectoFormComponent {
  protected proyectoForm: FormGroup;

  proyectoInicial = input<Proyecto | null>(null);

  guardar = output<Proyecto>();
  cancelar = output<void>();

  constructor(private _formBuilder: FormBuilder) {
    this.proyectoForm = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: [''],
      fechaInicio: ['', Validators.required],
      fechaFinalizacion: [''],
      empleadosAsignados: [[]],
      tareas: [[]]
    });

    // Effect para detectar cuando proyectoInicial cambia y poblar el formulario
    effect(() => {
      const proyecto = this.proyectoInicial();

      if (proyecto) {
        // Si hay un proyecto inicial, poblar el formulario con sus datos
        this.proyectoForm.patchValue({
          nombre: proyecto.nombre,
          descripcion: proyecto.descripcion,
          fechaInicio: proyecto.fechaInicio,
          fechaFinalizacion: proyecto.fechaFinalizacion,
          empleadosAsignados: proyecto.empleadosAsignados || [],
          tareas: proyecto.tareas || []
        });
      } else {
        // Si no hay proyecto inicial, resetear el formulario
        this.proyectoForm.reset();
      }
    });
  }

  alCrear() {
    if (this.proyectoForm.valid) {
      const proyecto: Proyecto = this.proyectoForm.value;
      this.guardar.emit(proyecto);  // Emite el proyecto al componente padre
    }
  }

  alCancelar() {
    this.cancelar.emit();  // Emite evento de cancelar
  }
}
