import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  adminSignup(){
    this.router.navigate(['dashboard']);
  }

}
