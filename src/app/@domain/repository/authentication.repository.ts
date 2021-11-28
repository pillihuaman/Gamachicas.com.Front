import { Observable } from "rxjs";
import { User } from "../../@data/model/User/user";
export abstract class AuthenticationRepository {

  abstract get getCurrentUserValue(): User;
  abstract login(login: string, clave: string): Observable<any>;
  abstract logout(): void;


}
