import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../../objects/user"
import {Observable,Subject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
import {Router} from '@angular/router'

@Injectable()
export class LoginService {
  myBool$: Observable<boolean>;
  private boolSubject: Subject<boolean>;
  constructor (
    private http: Http,private cookie: CookieService, private router: Router
  ) {
    this.boolSubject = new Subject<boolean>();
    this.myBool$ = this.boolSubject.asObservable();
  }
  private users:User[];
  getUsers() {
    return     this.users=[
      {userName:"admin@admin.com",
      password:"admin",
      role:"admin"},
      {userName:"user@user.com",
      password:"user",
      role:"freeuser"},
    ]
  }

  logSucc()
  {
    this.boolSubject.next(true);
  }
  logMeOut()
  {
    this.cookie.deleteAll();
    this.router.navigate(['']);
    this.boolSubject.next(false);
  }

}