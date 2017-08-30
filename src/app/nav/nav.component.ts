import { Component, OnInit,OnChanges,Input } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
import {LoginService} from '../services/all-services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnChanges {
  @Input() logged= false;
  constructor(private cookie: CookieService,private login: LoginService) {
 
   }

  ngOnChanges()
  {
    if (this.cookie.get('user')!='')
      this.logged = true;
    else
      this.logged=false;
  }
  logMeOut()
  {
    this.login.logMeOut();
  }
}
