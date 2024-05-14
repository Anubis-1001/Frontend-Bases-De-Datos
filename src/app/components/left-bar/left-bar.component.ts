import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.css'
})
export class LeftBarComponent {

  constructor(private leftService:LeftBarComponent){

  }


  seeCourses(){
    this.leftService.seeCourses();
  }

  seePendingExams(){
    this.leftService.seePendingExams();
  }
}
