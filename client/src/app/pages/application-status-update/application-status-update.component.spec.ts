import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatusUpdateComponent } from './application-status-update.component';

describe('ApplicationStatusUpdateComponent', () => {
  let component: ApplicationStatusUpdateComponent;
  let fixture: ComponentFixture<ApplicationStatusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationStatusUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationStatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
