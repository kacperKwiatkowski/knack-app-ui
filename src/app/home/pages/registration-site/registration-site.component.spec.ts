import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSiteComponent } from './registration-site.component';
import {RegisterFormComponent} from "../../components/register-form/register-form.component";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../../shared/shared.module";

describe('RegistrationSiteComponent', () => {
  let component: RegistrationSiteComponent;
  let fixture: ComponentFixture<RegistrationSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationSiteComponent, RegisterFormComponent],
      imports: [SharedModule]
    }).compileComponents();
    fixture = TestBed.createComponent(RegistrationSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
