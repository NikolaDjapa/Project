import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../../../objects/user"
@Injectable()
export class LoginService {
  constructor (
    private http: Http
  ) {}
  private users:User[];
  getUsers() {
    return     this.users=[
      {userName:"admin",
      password:"admin"},
      {userName:"user",
      password:"user"},
    ]
  }

}