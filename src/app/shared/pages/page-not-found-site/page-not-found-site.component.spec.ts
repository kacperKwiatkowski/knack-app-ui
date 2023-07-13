import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundSiteComponent } from './page-not-found-site.component';

describe('PageNotFoundSiteComponent', () => {
  let component: PageNotFoundSiteComponent;
  let fixture: ComponentFixture<PageNotFoundSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundSiteComponent]
    });
    fixture = TestBed.createComponent(PageNotFoundSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
