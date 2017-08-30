import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../../../objects/user"
@Injectable()
export class LoginService {
  constructor (
    private http: Http
  ) {}
  checkUser(user:User) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/authenticate', body, { headers }).map(res=>{JSON.stringify(res)});
  }

}