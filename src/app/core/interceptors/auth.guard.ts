import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRepository } from 'src/app/@domain/repository/userRepository';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserRepository,

  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const currentUser = this.authenticationService
      .getCurrentUserValue;
    if (currentUser) {
      const helper = new JwtHelperService();

      let token = localStorage.getItem('token');
      if (helper.isTokenExpired(token + "")) {
        // this.authenticationService.clearUser();
        this.router.navigate(['/auth/']);
        setTimeout(() => {

        }, 100);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/auth/']);
      setTimeout(() => {

      }, 100);
      return false;
    }
  }
}
