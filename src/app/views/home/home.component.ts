import { Component, Inject, OnInit } from '@angular/core';
import { LeftBarComponent } from "../../components/left-bar/left-bar.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { Course } from '../../dtos/Course';
import { HomeServiceService } from '../../services/home-service.service';
import { CourseComponent } from "../../components/course/course.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [LeftBarComponent, NavBarComponent, CourseComponent]
})
export class HomeComponent implements OnInit {

  courses?: Course[];

  constructor(private homeService: HomeServiceService) {
    this.courses = [];
  }

  ngOnInit(): void {
    
    this.homeService.getCourses().then((data) => {
      
      data.forEach(element => {
        element.forEach(course => {
            this.courses?.push(course);
        });
      
        
      });
    });

  }


}
