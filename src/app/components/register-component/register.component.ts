import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from "./register-service/register-service.service";
import { Router } from '@angular/router';
import {User} from "../../objects/user"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[RegisterServiceService]
})
export class RegisterComponent implements OnInit {
  private message="";
  private user=new User();
  constructor(private registerServiceService:RegisterServiceService,private router: Router,) { }

  ngOnInit() {
  }
  signUp(email, password, fname,lname,gender,address,event) {
    //event.preventDefault();
    this.user = ({username: email, password: password,role:"admin",fname: fname,lname:lname,gender:gender,address: address });
    this.registerServiceService.createUser(this.user).subscribe(
      res=>{
      this.router.navigate(['']);
      console.log("TRUE")
    },error=>{this.message="User already exists!!!";console.log("FALSE")});
  }

}
