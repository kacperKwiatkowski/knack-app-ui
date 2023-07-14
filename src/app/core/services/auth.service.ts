import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {UserCreateDTO} from "../models/UserCreateDTO";
import {UserDTO} from "../models/UserDTO";
import {UserLoginDTO} from "../models/UserLoginDTO";
import {AuthToken} from "../models/AuthToken";
import {API_URLS} from "../../variables";


@Injectable()
export class AuthService{

  constructor(private http: HttpClient) {
  }

  registerUser(userToRegister: UserCreateDTO): Observable<UserDTO> {
    console.log("This is auth service ...")

    return this.http.post<UserDTO>(`${API_URLS.USER_SERVICE_URL}/auth/register`, userToRegister)
      .pipe(
        catchError((err) => {
          console.log(err)
          throw new Error(err);
        })
      );
  }

  loginUser(userToRegister: UserLoginDTO): Observable<AuthToken> {
    console.log("This is auth service ...")

    return this.http.post<AuthToken>(`${API_URLS.USER_SERVICE_URL}/auth/login`, userToRegister)
      .pipe(
        catchError((err) => {
          console.log(err)
          throw new Error(err);
        })
      );
  }

}
