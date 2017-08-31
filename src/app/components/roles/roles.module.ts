import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
@NgModule({
  imports: [
    CommonModule,
    RolesRoutingModule
  ],
  declarations: [RoleComponent, RoleListComponent]
})
export class RolesModule { }
