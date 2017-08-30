import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../services/all-services'

const routes: Routes = [
  {
    path: 'roles',
    component: RoleListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'roles/:id',
    component: RoleComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
