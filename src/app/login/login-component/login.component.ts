import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usrName: string;
  pass: string;
  constructor(private router: Router,private cookieService: CookieService) {

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
