import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../services/all-services'

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'users/:id',
    component: UserComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
