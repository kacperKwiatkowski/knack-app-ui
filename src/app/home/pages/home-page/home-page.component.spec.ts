import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import {BannerComponent} from "../../components/banner/banner.component";
import {CategorySelectorComponent} from "../../components/category-selector/category-selector.component";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "../../../shared/shared.module";
import {CoreModule} from "../../../core/core.module";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, BannerComponent, CategorySelectorComponent],
      imports: [SharedModule, CoreModule]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
