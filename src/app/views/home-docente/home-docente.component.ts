import { Component } from '@angular/core';
import { CourseComponent } from "../../components/course/course.component";
import { PendingExamComponent } from "../../components/pending-exam/pending-exam.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { LeftBarComponent } from "../../components/left-bar/left-bar.component";
import { UserServiceService } from '../../services/user-service.service';
import { Course } from '../../dtos/Course';

@Component({
    selector: 'app-home-docente',
    standalone: true,
    templateUrl: './home-docente.component.html',
    styleUrl: './home-docente.component.css',
    imports: [CourseComponent, PendingExamComponent, NavBarComponent, LeftBarComponent]
})
export class HomeDocenteComponent {

    courses?: Course[];

    constructor(private userService: UserServiceService) {
        this.courses = [];
    }

    ngOnInit(): void {


        this.userService.getCourses().then((data) => {

            data.forEach(element => {
                element.forEach(course => {
                    this.courses?.push(course);
                });
            });
        });
    }
}
