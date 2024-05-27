import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LeftbarService } from '../../services/ui-services/leftbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.css'
})
export class LeftBarComponent {

  constructor(private leftService:LeftbarService,
    private router: Router
  ){

  }


  seeCourses(){
    this.leftService.seeCourses();
  }

  seePendingExams(){
    this.leftService.seePendingExams();
  }


  logout(){
    this.router.navigate(['/']);
  }
}
