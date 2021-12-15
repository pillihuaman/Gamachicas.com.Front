import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class NotauthGuard implements CanActivate {
  constructor(
    private router: Router,

  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const currentUser = null// this.authenticationService.getCurrentUserValue;
    if (currentUser) {
      this.router.navigate(['/pages/']);
      return false;
    } else {
      return true;
    }
  }
}
