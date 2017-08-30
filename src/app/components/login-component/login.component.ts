import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {LoginService} from "./login-service/login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
 
  usrName: string;
  pass: string;
  constructor(private router: Router,private cookieService: CookieService,private loginService:LoginService) {
      console.log(loginService.getUsers());
  }

  ngOnInit() {
    
  }

  login(usr,pass)
  {
    if(usr=='danica@gmail.com' && pass=='danica')
    {
      this.cookieService.set("user",usr);
      this.router.navigate(['roles']);
    }
  }

}
