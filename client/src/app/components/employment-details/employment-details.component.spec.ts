import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDetailsComponent } from './employment-details.component';

describe('EmploymentDetailsComponent', () => {
  let component: EmploymentDetailsComponent;
  let fixture: ComponentFixture<EmploymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
