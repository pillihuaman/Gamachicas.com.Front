import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, concatMap, map, mergeMap, timeout } from 'rxjs/operators';
import { AuthenticationRepository } from '../../@domain/repository/authentication.repository';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Const } from 'src/app/utils/const';
import { User } from '../model/User/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService extends AuthenticationRepository {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  logout(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    super();
  }

  public get getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: string, clave: string): Observable<any> {
    //this.currentUserSubject.next(null);
    return this.verifyCredentials(login, clave).pipe(
      //concatMap((res) => this.getApplicationRoles()),
      //concatMap((res) => this.getUserRoles()),
      //concatMap((res) => this.getRoleIdentity()),
      //concatMap((res) => this.getOptionsMenu()),
      //concatMap((res) => this.getDataReniec()),
      // concatMap(res => this.verifyEntity(res.entidadId)),
      catchError((e) => {
        throw e;
      })
    );
  }

  verifyCredentials(login: string, clave: string): Observable<any> {
    localStorage.clear();
    const userName = Const.USERNAME_SEGURIDAD;

    const password = Const.PASSWORD_SEGURIDAD;
    const header = new HttpHeaders({
      Authorization: `Basic ${btoa(
        unescape(encodeURIComponent(userName + ':' + password))
      )}`,
    });
    const params = {
      trace: {
        traceId: null,
      },
      payload: {
        usuario: login,
        password: clave,
        grantType: 'password',
      },
    };

    const url = `${Const.API_SEGURIDAD}v1/oauth2/tokens`;
    return this.http
      .post<any>(url, params, {
        headers: header,
        observe: 'response',
      })
      .pipe(
        timeout(2000),
        map((response: any) => {
          const usuario = response.body.payload.usuario;
          localStorage.setItem('currentUser', usuario);

          localStorage.setItem('token', response.body.payload.accessToken);
          localStorage.setItem(
            'userId',
            this.jwtHelper.decodeToken(response.body.payload.accessToken)
              .usuario.usuarioId
          );
          return response;
        }),
        catchError((e) => {
          if (e.code === 'PTMP') {
            localStorage.setItem('userDocument', login);
            this.router.navigateByUrl('/home/change-password');
          }
          throw e;
        })
      );
  }
}
