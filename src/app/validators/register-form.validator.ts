import {AbstractControl, AsyncValidatorFn} from "@angular/forms";
import {UserService} from "../components/services/UserService";
import {map} from "rxjs";


// TODO: Implement rest calls to the server for registration data uniqueness.

export function registrationLoginValidator(userService: UserService): AsyncValidatorFn {

  var a = null;

  return (control: AbstractControl) => {
    console.log("This is registration validation ...")
    console.log(control.value)

    return userService.findIfLoginExists(control.value)
      .pipe(map(response => {
        return response ? {loginExists: true} : null;
      }))
  }
}
