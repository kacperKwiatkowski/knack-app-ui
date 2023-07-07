import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSiteComponent } from './registration-site.component';

describe('RegistrationSiteComponent', () => {
  let component: RegistrationSiteComponent;
  let fixture: ComponentFixture<RegistrationSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationSiteComponent]
    });
    fixture = TestBed.createComponent(RegistrationSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
