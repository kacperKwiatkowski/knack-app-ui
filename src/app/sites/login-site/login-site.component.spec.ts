import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSiteComponent } from './login-site.component';
import {LoginFormComponent} from "../../components/login-form/login-form.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Only0neErrorPipe} from "../../pipes/only-one-error.pipe";

describe('LoginSiteComponent', () => {
  let component: LoginSiteComponent;
  let fixture: ComponentFixture<LoginSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Only0neErrorPipe, LoginSiteComponent, LoginFormComponent],
      imports: [MatCardModule, MatFormFieldModule,
        MatInputModule, MatDatepickerModule,NoopAnimationsModule,
        MatNativeDateModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
