import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable,Subject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
import {Router} from '@angular/router'

@Injectable()
export class UserServiceService {
  myBool$: Observable<boolean>;
  private boolSubject: Subject<boolean>;
  constructor (
    private http: Http,private cookie: CookieService, private router: Router
  ) {
    this.boolSubject = new Subject<boolean>();
    this.myBool$ = this.boolSubject.asObservable();
  }
  private users:any[];
  getUsers(){
    let body = "";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/AllUsers', body, { headers }).map(res=>res.text());
  }  


}