import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {             //data import
  
  
}
from "./data/data.all"
import {   //components import
LoginComponent,
RegisterComponent,
HomeComponent,
} from "./components/allComponents"

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: [],
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: RegisterComponent,
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
