import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsApplicationFormComponent } from './vehicle-details-application-form.component';

describe('VehicleDetailsApplicationFormComponent', () => {
  let component: VehicleDetailsApplicationFormComponent;
  let fixture: ComponentFixture<VehicleDetailsApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsApplicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
