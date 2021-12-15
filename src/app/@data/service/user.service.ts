import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, concatMap, map, mergeMap, timeout } from 'rxjs/operators';
import { UserRepository } from '../../@domain/repository/userRepository'
import { User } from '../model/User/user';
import { Const } from 'src/app/utils/const';
import { Route, Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class UserService extends UserRepository {
    logout(): void {
        throw new Error('Method not implemented.');
    }

    private currentUserSubject: BehaviorSubject<User>;

    constructor(
        private http: HttpClient, private router: Router,
    ) {
        super();
        // Falta el endpoint de obtener data de usuario por mientras sera del api persona

        //this.currentUser = this.currentUserSubject.asObservable();
    }

    public setUser(userInfo: User): void {
        throw new Error('Method not implemented.');
    }
    get getCurrentUserValue(): User {
        throw new Error('Method not implemented.');
    }
    login(login: string, clave: string): Observable<any> {
        //this.currentUserSubject.next(null);
        return this.verifyCredentials(login, clave).pipe(
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
            username: userName,
            password: password
        });
        const authenticationRequest = {
            username: login,
            password: clave,
            mail: 'password',

        };

        const url = `${Const.API_SEGURIDAD}authenticate`;
        return this.http
            .post<any>(url, authenticationRequest, { headers: header })
            .pipe(
                // timeout(2000),
                map((response: any) => {
                    localStorage.setItem("token", response.token)
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