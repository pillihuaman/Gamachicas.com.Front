import { User } from "../../@data/model/User/user";
export abstract class AuthenticationRepository {

  abstract get getCurrentUserValue(): User;


}
