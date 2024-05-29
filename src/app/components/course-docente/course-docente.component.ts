import { Component, Input } from '@angular/core';
import { Course } from '../../dtos/estudiante/Course';
import { Router } from '@angular/router';
import { CourseService } from '../../services/general-service/course.service';
import { UserActivoService } from '../../services/general-service/user-activo.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CrearExamenService } from '../../services/ui-services/crear-examen.service';

@Component({
  selector: 'app-course-docente',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './course-docente.component.html',
  styleUrl: './course-docente.component.css'
})
export class CourseDocenteComponent {
  @Input() course!: Course;

  constructor(private router:Router,
    private courseService: CourseService,
    private userActive: UserActivoService,
    private crearExamen: CrearExamenService
  ) {
  }


  loadCourse(){
    this.courseService.setCourse(this.course);
    if(this.userActive.getRol()=='docente' ){
      this.crearExamen.setCourse(this.course);
      this.router.navigate(['/crear-examen']);
    }
  }
    
}
