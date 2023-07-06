import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {registrationLoginValidator} from "../../validators/register-form.validator";
import {UserService} from "../services/UserService";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [UserService]
})
export class RegisterFormComponent {
  registerForm = this.fb.group({
    login: ['', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ],
      asyncValidators: [
        registrationLoginValidator(this.userService)
      ],
      updateOn: 'blur'
    }],
    dateOfBirth: [new Date(), Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  get registrationLogin() {
    return this.registerForm.controls['login'];
  }

}
