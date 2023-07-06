import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  val = {
    email: "example@gmail.com",
    password: "1234!"
  }

  login(loginForm: NgForm, submit: SubmitEvent) {
    console.log(loginForm.value, loginForm.valid, submit)
  }

  OnEmailChange(change: any) {
    console.log(change)
  }
}
