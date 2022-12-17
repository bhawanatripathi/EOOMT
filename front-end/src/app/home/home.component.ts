import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public data;
  constructor(private router: Router ) {
    this.data=['a','n','c'];
   }

  

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }

  
  

}
