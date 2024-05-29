import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../services/http-services/docente.service';
import { Course } from '../../dtos/estudiante/Course';
import { CrearExamenService } from '../../services/ui-services/crear-examen.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CrearExamenDTO } from '../../dtos/estudiante/CrearExam';
import { UserActivoService } from '../../services/general-service/user-activo.service';

@Component({
  selector: 'app-preambulo-creacion-examen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './preambulo-creacion-examen.component.html',
  styleUrl: './preambulo-creacion-examen.component.css'
})
export class PreambuloCreacionExamenComponent implements OnInit{

  temas!:any[];
  course!: Course
  formulario: FormGroup;

  constructor(
    private docenteService: DocenteService,
    private courseService: CrearExamenService,
    private fb: FormBuilder,
    private usuarioActivo: UserActivoService
  ) {
    this.temas = [];

    this.formulario = this.fb.group({
      nombre: [''],
      preguntasMax: [''],
      preguntasAle: [''],
      porcentajeCurso: [''],
      fechaInicio: [''],
      fechaFin: [''],
      porcentajeAprobatorio: [''],
      tema: ['']
    });
  }

  ngOnInit() {

    this.course = this.courseService.getCourse();

    this.docenteService.getTodoTemas(this.course.id_grupo).subscribe(
      (data) => {
        this.temas = data.respuesta;
      },
      (error) => {
        console.log(error);
      }
    );

  }


  crearExamen() {

    let examen = new CrearExamenDTO(
      this.formulario.value.preguntasMax,
      this.formulario.value.preguntasAle,
      this.formulario.value.porcentajeCurso,
      this.formulario.value.nombre,
      this.formulario.value.porcentajeAprobatorio,
      this.formulario.value.fechaInicio,
      this.formulario.value.fechaFin,
      this.formulario.value.tema,
      this.course.id_grupo,
      +this.usuarioActivo.getId(),
      this.course.id_grupo
    );

    this.docenteService.crearExamen(examen).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
