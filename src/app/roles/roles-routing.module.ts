import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'roles',
    component: RoleListComponent
  },
  {
    path: 'roles/:id',
    component: RoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
