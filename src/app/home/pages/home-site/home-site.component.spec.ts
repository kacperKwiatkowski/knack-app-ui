import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSiteComponent } from './home-site.component';
import {BannerComponent} from "../../components/banner/banner.component";
import {CategorySelectorComponent} from "../../components/category-selector/category-selector.component";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "../../../shared/shared.module";

describe('HomeSiteComponent', () => {
  let component: HomeSiteComponent;
  let fixture: ComponentFixture<HomeSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSiteComponent, BannerComponent, CategorySelectorComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(HomeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
