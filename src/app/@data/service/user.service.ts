import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, concatMap, map, mergeMap, timeout } from 'rxjs/operators';
import { UserRepository } from '../../@domain/repository/User.Repository'
import { User } from '../model/User/user';
@Injectable({ providedIn: 'root' })
export class UserService extends UserRepository {
    get getCurrentUserValue(): User {
        throw new Error('Method not implemented.');
    }
    login(login: string, clave: string): Observable<any> {
        throw new Error('Method not implemented.');
    }
    logout(): void {
        throw new Error('Method not implemented.');
    }
    public setUser(userInfo: User): void {
        throw new Error('Method not implemented.');
    }

    constructor() {
        super();
    }



}

