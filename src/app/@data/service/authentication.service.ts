import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, concatMap, map, mergeMap, timeout } from 'rxjs/operators';
import { AuthenticationRepository } from '../../@domain/repository/authentication.repository';
import { User } from '../model/User/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends AuthenticationRepository {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
  ) {
    super();
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }


}
