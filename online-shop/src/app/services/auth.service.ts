import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../modules/shared/types/users.types';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Route } from '@angular/router';
import { Auth } from '../modules/shared/types/auth.types';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser!: Auth | null;

  constructor(private http: HttpClient) {}

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) return true;
    return false;
  }

  login(user: User) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, user).pipe(
      map((data) => {
        if (data) {
          console.log(data);
          localStorage.setItem('token', data.access_token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  authProfileInfo() {
    this.http
      .get<Auth>(environment.apiUrl + '/auth/profile')
      .subscribe((response) => {
        this.currentUser = response;
      });
  }

  isAdmin(): boolean {
    if (this.currentUser) return this.currentUser.roles.includes('administrator');
    return false;
  }
}
