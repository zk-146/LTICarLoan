import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalcComponent } from './emi-calc.component';

describe('EmiCalcComponent', () => {
  let component: EmiCalcComponent;
  let fixture: ComponentFixture<EmiCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
