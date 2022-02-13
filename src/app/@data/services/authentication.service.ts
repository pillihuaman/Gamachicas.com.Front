import { ModalRepository } from 'src/app/@domain/repository/repository/modal.repository ';
import { Const } from './../../utils/const';
import { catchError, map, timeout } from 'rxjs/operators';
import { User } from './../../@domain/repository/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthenticationRepository } from 'src/app/@domain/repository/repository/authentication.repository';
import { Utils } from 'src/app/utils/utils';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends AuthenticationRepository {
  clearUser(): void {
    localStorage.clear();
    this.currentUserSubject.next(null!);
  }
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public defaultHeaders = new HttpHeaders();
  private applicationRoles = [];
  private userRoles = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalRepository: ModalRepository,
    private toastrService: NbToastrService
  ) {
    super();
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('usuario')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: string, clave: string): Observable<any> {
    this.currentUserSubject.next(null!);
    return this.verifyCredentials(login, clave).pipe(
      catchError((e) => {
        if (!Utils.empty(e)) {
          if (!Utils.empty(e.status)) {
            if (e.status === 400) {
              if (!Utils.empty(e.error)) {
                if (!Utils.empty(e.error.detail)) {
                }
              }
            }
          }
        }
        //   this.modalService.create();
        return e;
        // throw e;
      })
    );
  }

  verifyCredentials(login: string, clave: string): Observable<any> {
    localStorage.clear();
    const userName = Const.USERNAME_SEGURIDAD;
    const password = Const.PASSWORD_SEGURIDAD;

    //let headers = new HttpHeaders();
    let body: any = {
      username: userName,
      password: password,
      mail: 'pillihuamanhz@gmail.com',
    };
    let httpHeaderAccepts: string[] = [
      'text/plain',
      'application/json',
      'text/json',
    ];
    const consumes: string[] = [
      'application/json',
      'text/json',
      'application/_*+json',
    ];
    // headers = headers.set('Accept', httpHeaderAccepts);
    //headers = headers.set('Content-Type', consumes);
    //headers = headers.set('username', login);
    //headers = headers.set('password', clave);

    const header = new HttpHeaders({
      Authorization: `Basic ${btoa(
        unescape(encodeURIComponent(login + ':' + clave))
      )}`,
    });

    const url = `${Const.API_SEGURIDAD}/authenticate`;
    return this.http
      .post<any>(url, body, { headers: header, observe: 'response' })
      .pipe(
        timeout(2000),
        map((response: any) => {
          const usuario = response.userName;
          localStorage.setItem('currentUser', usuario);
          this.currentUserSubject.next({
            token: response.token,
          });
          localStorage.setItem('token', response.token);

          return response;
        }),
        catchError((e) => {
          let nbComponentStatus: NbComponentStatus = 'danger';
          // this.router.navigate(['/auth/']);
          //this.modalRepository.open(true);
          this.modalRepository.showToast(nbComponentStatus, e.message);
          throw e;
        })
      );
  }
}
