import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  logged = true;
  constructor(private cookie: CookieService) { }

  ngOnInit() {
   // this.logged = (this.cookie.get('user')!='');

  }

}
