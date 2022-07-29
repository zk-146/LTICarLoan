import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSigninSwitchComponent } from './register-signin-switch.component';

describe('RegisterSigninSwitchComponent', () => {
  let component: RegisterSigninSwitchComponent;
  let fixture: ComponentFixture<RegisterSigninSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSigninSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSigninSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
