import { Component } from '@angular/core';
import {LoginService} from "./services/all-services"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  logged = false;
  constructor(private login: LoginService)
  {
    this.login.myBool$.subscribe((newBool: boolean) => { this.logged = newBool; });
  }


}
