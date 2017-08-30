import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../../../objects/user"
@Injectable()
export class LoginService {
  constructor (
    private http: Http
  ) {}


}