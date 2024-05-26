import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/http-services/auth-service.service';
import { LoginDTO } from '../../dtos/autenticacion/Login';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../utils/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('passwordInput') passwordInput!: ElementRef;
  selectedRole!: string;
  formulario: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router
  ) { 
    this.formulario = this.fb.group({
      id: ['']
    });
  }

  selectRole(rol: string) {
    this.selectedRole = rol;
  }

  signIn() {
    


    let id = this.formulario.get('id')?.value;

    if(id == null || id == '') {
      this.alertService.showMessage('Por favor, ingrese un ID válido');
      return;
    }


    let user = new LoginDTO(this.selectedRole, id);

    this.authService.login(user).subscribe(
      (data) => {
        console.log(data);
        if(data.mensaje == '' && data.error == false ) {
          this.alertService.showMessage('Inicio de sesión exitoso');

          if(this.selectedRole == 'admin') {
            this.router.navigate(['/home']);
            console.log('navegando como admin');
          } else {
            this.router.navigate(['/home']);
            console.log('navegando como usuario');
          }


        } else {
          this.alertService.showMessage('Error al iniciar sesión');
        }
      },
      (error) => {
        console.log(error);
        this.alertService.showMessage('Error al iniciar sesión');
      }
    );    
  }

  navigate(route: string) {
    this.router.navigate([route]);
    console.log('navegando a ' + route);
  }

}
