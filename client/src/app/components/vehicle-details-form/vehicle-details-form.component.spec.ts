import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsFormComponent } from './vehicle-details-form.component';

describe('VehicleDetailsFormComponent', () => {
  let component: VehicleDetailsFormComponent;
  let fixture: ComponentFixture<VehicleDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
