import { Observable } from "rxjs";
import { User } from "src/app/@data/model/User/user";

export abstract class UserRepository {
    constructor() { }
    protected user: User;
    public abstract setUser(userInfo: User): void;
    public getUser(): User {
        return this.user;
    }

    abstract get getCurrentUserValue(): User;
    abstract login(login: string, clave: string): Observable<any>;
    abstract logout(): void;
}