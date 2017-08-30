import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from "./register-service/register-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[RegisterServiceService]
})
export class RegisterComponent implements OnInit {

  constructor(private registerServiceService:RegisterServiceService,private router: Router,) { }

  ngOnInit() {
  }
  signUp(email, password, password2, event) {
    event.preventDefault();
    let user = ({username: email, password: password });
    this.registerServiceService.createUser(user).subscribe(
      res=>{
      this.router.navigate(['']);
    },error=>{console.log(error)})
  }

}
