import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationRepository } from '../../@domain/repository/authentication.repository';

@Injectable({ providedIn: 'root' })
export class NotauthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationRepository,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const currentUser = this.authenticationService.getCurrentUserValue;
    if (currentUser) {
      // this.router.navigate(['/pages/']);
      return false;
    } else {
      return true;
    }
  }
}
