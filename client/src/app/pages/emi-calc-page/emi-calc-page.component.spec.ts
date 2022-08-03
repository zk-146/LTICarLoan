import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalcPageComponent } from './emi-calc-page.component';

describe('EmiCalcPageComponent', () => {
  let component: EmiCalcPageComponent;
  let fixture: ComponentFixture<EmiCalcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiCalcPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiCalcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
