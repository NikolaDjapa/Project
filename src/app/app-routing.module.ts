import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {             //data import
  LoginDataComponent,
  
}
from "./data/data.all"
=======
import { LoginComponent} from './login/login-component/login.component'
>>>>>>> 411386fd25ee9dd650129e8b39b9cad7e027efc9

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
