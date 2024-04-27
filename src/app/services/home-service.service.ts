import {Injectable } from '@angular/core';
import { Course } from '../dtos/Course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }

  async getCourses(): Promise< Observable<Course[]>> {
    return await this.http.get<Course[]>('../assets/data/home/courses.json');
  }
}
