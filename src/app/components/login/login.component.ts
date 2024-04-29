import { Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  togglePassword() {
    const inputType = this.passwordInput.nativeElement.type;
    this.passwordInput.nativeElement.type = inputType === 'password' ? 'text' : 'password';
  }
}
