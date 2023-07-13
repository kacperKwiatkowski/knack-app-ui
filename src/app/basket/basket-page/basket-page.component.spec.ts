import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketPageComponent } from './basket-page.component';
import {SharedModule} from "../../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('BasketPageComponent', () => {
  let component: BasketPageComponent;
  let fixture: ComponentFixture<BasketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketPageComponent],
      imports: [SharedModule,     BrowserAnimationsModule,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(BasketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
