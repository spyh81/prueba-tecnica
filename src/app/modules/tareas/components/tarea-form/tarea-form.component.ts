import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { Component, effect, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoTarea } from '../../models/estadoTarea.enum';


@Component({
  selector: 'app-tarea-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tarea-form.component.html',
  styleUrl: './tarea-form.component.css'
})
export class TareaFormComponent {
  protected tareaForm: FormGroup;

  estadosTarea = Object.values(EstadoTarea);

  tareaInicial = input<Tarea | null>(null);
  guardar = output<Tarea>();
  cancelar = output<void>();

  constructor(private _formBuilder: FormBuilder) {
    this.tareaForm = this._formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: [''],
      estado: [''],
      fechaCreacion: ['', Validators.required],
      fechaFinalizacion: ['']
    });

    effect(() => {
      const tarea = this.tareaInicial();

      if (tarea) {
        this.tareaForm.patchValue({
          titulo: tarea.titulo,
          descripcion: tarea.descripcion,
          estado: tarea.estado,
          fechaCreacion: tarea.fechaCreacion,
        });
      } else {
        this.tareaForm.reset();
      }
    });
  }

  alCrear() {
    if (this.tareaForm.valid) {
      const tarea: Tarea = this.tareaForm.value;
      this.guardar.emit(tarea);
    }
  }

  alCancelar() {
    this.cancelar.emit();
  }
}

