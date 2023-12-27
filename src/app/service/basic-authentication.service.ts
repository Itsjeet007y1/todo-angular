import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';
import { map } from 'rxjs';
import { API_URL } from '../app.constant';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user == null);
  }

  logOut() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<Todo>(
      `${API_URL}/basicauth`,
      {headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
     }
    return;
  }
}
