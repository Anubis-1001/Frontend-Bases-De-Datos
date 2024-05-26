import { Component, Inject, OnInit } from '@angular/core';
import { LeftBarComponent } from "../../components/left-bar/left-bar.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { Course } from '../../dtos/Course';
import { CourseComponent } from "../../components/course/course.component";
import { UserServiceService } from '../../services/ui-services/user-service.service';
import { PendingExamComponent } from "../../components/pending-exam/pending-exam.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [LeftBarComponent, NavBarComponent, CourseComponent, PendingExamComponent]
})
export class HomeComponent implements OnInit {

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
