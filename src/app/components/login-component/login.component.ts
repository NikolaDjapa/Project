import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from "../../objects/user"
import {LoginService} from "../../services/all-services"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {
  message: string = "";
  usrName: string;
  pass: string;
  constructor(private router: Router, private cookieService: CookieService, private loginService: LoginService) {
  }

  ngOnInit() {

  }

  login(usr, pass, event) {
    event.preventDefault();
    let user = new User();
    user.username = usr;
    user.password = pass;
    user.role = "admin";
    this.loginService.checkUser(user).subscribe(
      data => {  //successful login
        console.log(data);
        this.loginService.logSucc();
        this.cookieService.set("user", usr);
        this.router.navigate(['roles']);
      },
      error => { this.message = "Wrong username or password!!";});  // failed login
  }

  redirect(){
    this.router.navigate(["signup"]);
  }

}
