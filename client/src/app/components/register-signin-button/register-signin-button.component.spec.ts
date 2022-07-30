import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSigninButtonComponent } from './register-signin-button.component';

describe('RegisterSigninButtonComponent', () => {
  let component: RegisterSigninButtonComponent;
  let fixture: ComponentFixture<RegisterSigninButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSigninButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSigninButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
