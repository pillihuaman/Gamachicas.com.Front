import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationRepository } from '../../@domain/repository/authentication.repository';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastService } from '../../@presentation/@service/toast';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationRepository,
    private toastService: ToastService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const currentUser = this.authenticationService
      .getCurrentUserValue;
    if (currentUser) {
      const helper = new JwtHelperService();
      const token = localStorage.getItem('token');
      if (helper.isTokenExpired(token)) {
        this.authenticationService.clearUser();
        this.router.navigate(['/auth/']);
        setTimeout(() => {
          this.toastService.showToast(
            'Tiempo expirado, por favor inicie sesión nuevamente',
            'primary'
          );
        }, 100);
        return false;
      } else if (route.routeConfig.path === "auth") {
        this.router.navigate(['/pages/']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/auth/']);
      setTimeout(() => {
        this.toastService.showToast(
          'Por favor inicie sesión',
          'primary'
        );
      }, 100);
      return false;
    }
  }
}
