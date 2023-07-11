import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {registrationLoginValidator} from "../../validators/register-form.validator";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [UserService]
})
export class RegisterFormComponent implements OnInit{
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
    dateOfBirth: [new Date(), Validators.required],
    password: ['', Validators.required],
    confirmPassword: [{value: '', disabled: true}, Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(val => {
      const password = this.registerForm.controls["password"];
      const confirmPassword = this.registerForm.controls["confirmPassword"];

      if(val.password == ''){
        confirmPassword.disable({emitEvent: false});
        confirmPassword.markAsPristine()
        confirmPassword.markAsUntouched()
        confirmPassword.setValue(null)
      } else {
        confirmPassword.enable({emitEvent: false})
      }

      if(val.password != val.confirmPassword){
        password.setErrors({'incorrect': true})
        confirmPassword.setErrors({'incorrect': true})
      } else {
        password.setErrors(null)
        confirmPassword.setErrors(null)
      }
    })
  }

  get registrationLogin() {
    return this.registerForm.controls['login'];
  }

}
