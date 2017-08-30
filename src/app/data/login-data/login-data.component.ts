import { Component, OnInit } from '@angular/core';
import {User} from '../../objects/user';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.scss']
})
export class LoginDataComponent implements OnInit {
  private users:User[];
  private JSON= JSON;
  constructor() {
    this.users=[
      {userName:"admin",
      password:"admin"},
      {userName:"user",
      password:"user"},
    ]
   }

  ngOnInit() {
  }

}
