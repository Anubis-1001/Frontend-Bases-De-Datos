import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftbarService {

  constructor() { }



  seeCourses(){
    console.log("Courses");
  }

  seeExams(){
    console.log("Exams");
  }
    
}
