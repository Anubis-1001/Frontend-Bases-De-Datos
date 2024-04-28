import {Injectable } from '@angular/core';
import { Course } from '../dtos/Course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../dtos/Exam';
import { ExamDone } from '../dtos/ExamDone';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  

  constructor(private http:HttpClient) { }

  async getCourses(): Promise< Observable<Course[]>> {
    return await this.http.get<Course[]>('../assets/data/home/courses.json');
  }

  async getExams():Promise< Observable<Exam[]>> {
    return await this.http.get<Exam[]>('../assets/data/exams/pendingExams.json');
  }

  async getExamsDone() {
    return await this.http.get<ExamDone[]>('../assets/data/exams/doneExams.json');
  }
}
