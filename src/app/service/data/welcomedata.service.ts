import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GreetingMessage } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloService() {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeaderString
    //   }
    // )
    return this.http.get<GreetingMessage>("http://localhost:8080/hello");
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'user';
  //   let password = 'user';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
  //   return basicAuthHeaderString;
  // }


}
