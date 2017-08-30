import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
    this.http.get('/userData').subscribe(data => {
       console.log(data);
    });
   }

}
