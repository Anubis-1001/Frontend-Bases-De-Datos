import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LeftbarService } from '../../services/ui-services/leftbar.service';
import { Router } from '@angular/router';
import { UserActivoService } from '../../services/general-service/user-activo.service';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.css'
})
export class LeftBarComponent {

  rol!: string;

  constructor(private leftService:LeftbarService,
    private router: Router,
    private userService: UserActivoService
  ){

  }

  ngOnInit(){
    this.rol = this.userService.getRol();
    console.log("El rol de quien inicia sesión "+this.userService.getRol());
    console.log("El rol de quien inicia sesión "+this.rol);
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
