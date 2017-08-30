import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usrName: string;
  pass: string;
  router;
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    
  }

  login(usr,pass)
  {
    if(usr=='danica@gmail.com' && pass=='danica')
    {
      this.router.navigate(['roles']);
    }
  }

}
