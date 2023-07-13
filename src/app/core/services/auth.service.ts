import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {UserCreateDTO} from "../models/UserCreateDTO";
import {UserDTO} from "../models/UserDTO";


@Injectable()
export class AuthService{

  constructor(private http: HttpClient) {
  }

  registerUser(userToRegister: UserCreateDTO): Observable<UserDTO> {
    console.log("This is auth service ...")

    return this.http.post<UserDTO>('http://localhost:8080/api/v.1.0/users/auth/register', userToRegister)
      .pipe(
        catchError((err) => {
          console.log(err)
          throw new Error(err);
        })
      );
  }
}
