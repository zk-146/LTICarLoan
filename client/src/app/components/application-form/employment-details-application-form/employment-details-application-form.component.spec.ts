import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDetailsApplicationFormComponent } from './employment-details-application-form.component';

describe('EmploymentDetailsApplicationFormComponent', () => {
  let component: EmploymentDetailsApplicationFormComponent;
  let fixture: ComponentFixture<EmploymentDetailsApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentDetailsApplicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentDetailsApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
