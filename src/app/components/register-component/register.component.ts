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
  private mesage="";
  constructor(private registerServiceService:RegisterServiceService,private router: Router,) { }

  ngOnInit() {
  }
  signUp(email, password, fname,lname,gender,address, event) {
    event.preventDefault();
    let user = ({username: email, password: password,fname: fname,lname:lname,gender:gender,address: address });
    this.registerServiceService.createUser(user).subscribe(
      res=>{
      this.router.navigate(['']);
    },error=>{this.mesage="User already exists!!!"})
  }

}
