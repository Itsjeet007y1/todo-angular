import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GreetingMessage } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloService() {
    return this.http.get<GreetingMessage>("http://localhost:8080/hello");
  }
}
