import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router, public authenticateService : HardcodedAuthenticationService) {
    
  }

  username = "jitendra";
  password = "pass123";

  invalidLogin = false;

  errorMessage = "Invalid username/password";

  handleLogin() {
    if(this.authenticateService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

  

}
