import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ground',
  templateUrl: './add-ground.component.html',
  styleUrls: ['./add-ground.component.css']
})
export class AddGroundComponent implements OnInit {

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
