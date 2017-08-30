import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {             //data import
  LoginDataComponent,
  
}
from "./data/data.all"
import { LoginComponent} from './login/login-component/login.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: [],
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
