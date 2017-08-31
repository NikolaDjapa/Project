import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service/user-service.service"
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
  providers:[UserServiceService]
})
export class UserListComponent implements OnInit {
  private users:any[];
  constructor(private userServiceService:UserServiceService) { }

  ngOnInit() {
    this.userServiceService.getUsers().subscribe(res=>{
      this.users=JSON.parse(res);
      console.log(this.users);
    },error=>{})
  }

}
