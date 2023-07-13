import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Only0neErrorPipe} from "../../pipes/only-one-error.pipe";

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Only0neErrorPipe, LoginFormComponent],
      imports: [MatCardModule, FormsModule, MatCardModule, MatFormFieldModule,
        MatInputModule, MatDatepickerModule,NoopAnimationsModule,
        MatNativeDateModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
