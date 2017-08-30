import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {LoginService} from "../../services/all-services"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[]
})
export class LoginComponent implements OnInit {
  message:string="";
  usrName: string;
  pass: string;
  constructor(private router: Router,private cookieService: CookieService,private loginService:LoginService) {
  }

  ngOnInit() {
    
  }

  login(usr,pass)
  {
    let users=this.loginService.getUsers();
    users.forEach(user => {
      if(usr==user.userName && pass==user.password)
        {
          this.cookieService.set("user",usr);
          this.loginService.logSucc();
          this.router.navigate(['roles']);
          return;
        }
    });
      this.message="Wrong username or password!!";
  }

}
