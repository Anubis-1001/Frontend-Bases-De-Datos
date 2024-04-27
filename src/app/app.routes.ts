import { Routes } from '@angular/router';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { DefaultViewComponent } from './views/default-view/default-view.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    { path: 'sign-in', component: SignInComponent },
    { path: 'default-view', component: DefaultViewComponent },
    { path: 'home', component: HomeComponent}
];
