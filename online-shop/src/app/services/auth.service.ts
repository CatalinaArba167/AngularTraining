import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../modules/shared/types/users.types';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Route } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public getToken(): string | null{
    return localStorage.getItem('token');
  }
  
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    if(!token) return false;
    return true;
    // return a boolean reflecting 
    // whether or not the token is expired
  }

  login(user:User) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, user)
        .pipe(map(data => {
            // login successful if there's a jwt token in the response
            if (data) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(data.access_token));
            }}));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}
}