import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username=""
  password=""
  errorMsg="***Invalid Credentials***"
  invalidLogin = false
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
adminLogin(){
  if(this.username==="admin" && this.password==="passkey"){
    this.router.navigate(['dashboard']);
     this.invalidLogin = false;
  }else{ this.invalidLogin = true; }
  console.log(this.username);


}
}
