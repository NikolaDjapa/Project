import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
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

  logSucc()
  {
    this.boolSubject.next(true);
  }
  logMeOut()
  {
    this.cookie.deleteAll();
    setTimeout(function(){},100);
    this.boolSubject.next(false);
    this.router.navigate(['']);
  }
  
  checkUser(user:User) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/authenticate', body, { headers }).map(res=>res.text());
  }

}