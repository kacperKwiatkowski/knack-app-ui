import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {registrationLoginValidator} from "../../../core/validators/register-form.validator";
import {UserService} from "../../../core/services/user.service";
import {UserCreateDTO} from "../../../core/models/UserCreateDTO";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [UserService, AuthService]
})
export class RegisterFormComponent implements OnInit{
  registerForm = this.fb.group({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(60)],
      // asyncValidators: [registrationLoginValidator(this.userService)],
      updateOn: 'blur'
    }),
    firstName: new FormControl('', {validators: [Validators.required]}),
    lastName: new FormControl('', {validators: [Validators.required]}),
    email: new FormControl('', {validators: [Validators.required]}),
    phoneNumber: new FormControl('', {validators: [Validators.required]}),
    dateOfBirth: new FormControl(new Date(), {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required]}),
    confirmPassword: new FormControl({value: '', disabled: true}, {validators: [Validators.required]})
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
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
    return this.registerForm.controls['username'];
  }

  registrationFormSubmit(){
    console.log(this.registerForm.value)

    if(this.registerForm.valid){
      console.log("Form is valid")
      const formValue = this.registerForm.value

      const userToRegister: UserCreateDTO = {
        username: formValue.username,
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        phoneNumber: formValue.phoneNumber,
        dateOfBirth: formValue.dateOfBirth,
        password: formValue.password
      }

      this.authService.registerUser(userToRegister)
        .subscribe((data) => {console.log(data)});
    } else {
      console.log("Form invalid")
    }
  }
}
