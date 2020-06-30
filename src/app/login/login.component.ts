import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  pwd: string;

  constructor(private router: Router) { }

  submitForm() {
    this.router.navigateByUrl('/home');
    sessionStorage.setItem('loggedInUser', this.userName);
  }

}
