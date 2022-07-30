import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsApplicationFormComponent } from './loan-details-application-form.component';

describe('LoanDetailsApplicationFormComponent', () => {
  let component: LoanDetailsApplicationFormComponent;
  let fixture: ComponentFixture<LoanDetailsApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDetailsApplicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
