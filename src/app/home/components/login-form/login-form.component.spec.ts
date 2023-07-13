import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {Only0neErrorPipe} from "../../../shared/pipes/only-one-error.pipe";
import {SharedModule} from "../../../shared/shared.module";
import {CoreModule} from "../../../core/core.module";

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Only0neErrorPipe, LoginFormComponent],
      imports: [SharedModule, CoreModule ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
