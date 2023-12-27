import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router,
    public authenticateService : HardcodedAuthenticationService,
    public basicAuthenticateService: BasicAuthenticationService
    ) {
    
  }

  username = "";
  password = "";

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

  handleBasicAuthLogin() {
    this.basicAuthenticateService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin=false
      },
      error => {
        this.invalidLogin = true;
        console.log(error)
      }
    )
  }

}
