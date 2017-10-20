import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector    : 'login',
  templateUrl : 'public/ts/login/login.component.html',
  styleUrls   : ['public/ts/login/login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){}

  onClickSubmit(){
    this.router.navigate(['home']);
  }
}