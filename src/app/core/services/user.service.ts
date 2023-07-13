import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  findIfLoginExists(login: string): Observable<boolean> {
    console.log("This is user service ...")

    this.http.get('');

    return new Observable(observer => {
      if (login == "testtesttest") {
        console.log("True")
        observer.next(true)
      } else {
        console.log("False")
        observer.next(false)
      }

      observer.complete();
    });
  }
}
