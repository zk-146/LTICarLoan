import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDetailsApplicationFormComponent } from './identity-details-application-form.component';

describe('IdentityDetailsApplicationFormComponent', () => {
  let component: IdentityDetailsApplicationFormComponent;
  let fixture: ComponentFixture<IdentityDetailsApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityDetailsApplicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityDetailsApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
