import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../../../app-routing.module";
import {UserService} from "../../services/user.service";

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [SharedModule,     BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientTestingModule
      ], providers: [UserService]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    const service: UserService = TestBed.inject(UserService);
    expect(service).toBeTruthy();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
