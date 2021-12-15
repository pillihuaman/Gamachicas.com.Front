import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { AuthenticationRepository } from '../../@domain/repository/authentication.repository';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (request.headers.get("Authorization") == null) {
      //  const currentUser = this.authenticationService.getCurrentUserValue;
      // if (currentUser && currentUser.token) {
      const token = sessionStorage.getItem("token");
      headersConfig.Authorization = 'Bearer ' + `${token}`;
      //}
      request = request.clone({ setHeaders: headersConfig });

    }
    return next.handle(request);
  }
}
