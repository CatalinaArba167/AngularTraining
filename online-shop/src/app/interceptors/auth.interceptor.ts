import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = this.auth.getToken();
    if (idToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer` + idToken,
        },
      });
      return next.handle(request);
    } else {
      return next.handle(request).pipe(
        tap((data) => {
          console.log(data);
        })
      );
    }
  }
}
