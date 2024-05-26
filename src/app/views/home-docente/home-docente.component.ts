import { Component } from '@angular/core';
import { CourseComponent } from "../../components/course/course.component";
import { PendingExamComponent } from "../../components/pending-exam/pending-exam.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { LeftBarComponent } from "../../components/left-bar/left-bar.component";
import { UserServiceService } from '../../services/ui-services/user-service.service';
import { Course } from '../../dtos/Course';
import { DocenteService } from '../../services/http-services/docente.service';
import { UserActivoService } from '../../services/user-activo/user-activo.service';

@Component({
    selector: 'app-home-docente',
    standalone: true,
    templateUrl: './home-docente.component.html',
    styleUrl: './home-docente.component.css',
    imports: [CourseComponent, PendingExamComponent, NavBarComponent, LeftBarComponent]
})
export class HomeDocenteComponent {

    courses?: Course[];
    nombre: string;

    constructor(private userService: UserServiceService,
        private docenteService: DocenteService,
        private userActivo: UserActivoService
    ) {
        this.courses = [];
        this.nombre = '';
    }

    ngOnInit(): void {


        this.docenteService.getName(this.userActivo.getId()).subscribe(
            (data) => {

                if(data.error == false ) {
                    this.nombre = data.mensaje;
                }

            },
            (error) => {

            }
        );


        this.userService.getCourses().then((data) => {

            data.forEach(element => {
                element.forEach(course => {
                    this.courses?.push(course);
                });
            });
        });
    }
}
