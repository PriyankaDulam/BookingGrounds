import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-ground',
  templateUrl: './edit-ground.component.html',
  styleUrls: ['./edit-ground.component.css']
})
export class EditGroundComponent implements OnInit {
  GroundName=""
  GroundPrice = ""
  GroundLocation=""
  GameType = ""
  GroundDescription=""

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleGround(){
    this.router.navigate(['dashboard']);
    console.log(this.GroundName);
    console.log(this.GroundPrice);
    console.log(this.GroundLocation);
    console.log(this.GameType);
    console.log(this.GroundDescription);
  }
}
