import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../services/http-services/docente.service';
import { Course } from '../../dtos/estudiante/Course';
import { CrearExamenService } from '../../services/ui-services/crear-examen.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CrearExamenDTO } from '../../dtos/estudiante/CrearExam';
import { UserActivoService } from '../../services/general-service/user-activo.service';
import { DatePipe } from '@angular/common';
import { AlertService } from '../../utils/alert.service';

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
  formulario!: FormGroup;

  constructor(
    private docenteService: DocenteService,
    private courseService: CrearExamenService,
    private fb: FormBuilder,
    private usuarioActivo: UserActivoService,
    private datePipe: DatePipe,
    private alertService: AlertService
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

    let fechaInicio = this.datePipe.transform(this.formulario.get('fechaInicio')!.value, 'yyyy-MM-dd HH:mm:ss');
    let fechaFin = this.datePipe.transform(this.formulario.get('fechaFin')!.value, 'yyyy-MM-dd HH:mm:ss');

    let examen = new CrearExamenDTO(
      this.formulario.get('preguntasMax')!.value,
      this.formulario.get('preguntasAle')!.value,
      this.formulario.get('porcentajeCurso')!.value,
      this.formulario.get('nombre')!.value,
      this.formulario.get('porcentajeAprobatorio')!.value,
      fechaInicio!.toString(),
      fechaFin!.toString(),
      10,
      +this.formulario.get('tema')!.value,
      +this.usuarioActivo.getId(),
      +this.course.id_grupo
    );

    this.docenteService.crearExamen(examen).subscribe(
      (data) => {
        
        this.alertService.showMessage('Examen creado');
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
