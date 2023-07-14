import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {UserLoginDTO} from "../../../core/models/UserLoginDTO";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService]
})
export class LoginFormComponent implements OnInit{

  loginForm: FormGroup = this.fb.group({
    username: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(val => {
      const confirmPassword = this.loginForm.controls["email"];
      const password = this.loginForm.controls["password"];

    })
  }

  loginFormSubmit(){
    console.log(this.loginForm.value)

    if(this.loginForm.valid){
      console.log("Form is valid")
      const formValue = this.loginForm.value;

      const userToLogin: UserLoginDTO = {
        username: formValue.username,
        password: formValue.password
      }

      this.authService.loginUser(userToLogin).subscribe(
        data => {
          console.log(data)
          localStorage.setItem('AuthToken', data.jwt!)
        }
      )
    }
  }

}
