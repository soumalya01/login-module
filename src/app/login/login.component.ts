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
    if(this.userName != undefined && this.userName != "" && this.pwd != undefined && this.pwd != "") {
      this.router.navigateByUrl('https://ens-auto-ml.herokuapp.com/');
      sessionStorage.setItem('loggedInUser', this.userName);

    } else {
      alert("Enter login details");
    }
    
  }

}
