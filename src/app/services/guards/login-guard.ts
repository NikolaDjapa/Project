import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'

@Injectable()
export class LoginGuard implements CanActivate {

   constructor(private router: Router,private cookie: CookieService) {}

   canActivate(): boolean {
      if(this.cookie.get('user')!='')
         return true;
      else
        this.router.navigate(['']);
       return false;

   }

}
