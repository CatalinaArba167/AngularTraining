import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const isUserAdmin = this.authService.isAdmin();
    const isAddOrEditRoute = route.routeConfig?.path === 'edit/:id' || route.routeConfig?.path === 'add';

    if (this.authService.getToken() && isUserAdmin) {
      return true;
    }
    if (!this.authService.getToken()) {
      return this.router.parseUrl('/auth');
    } else if (!isUserAdmin && isAddOrEditRoute) {
      return this.router.parseUrl('/products'); 
    } else {
      return true;
    }
  }
}
