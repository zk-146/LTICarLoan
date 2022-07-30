import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsApplicationFormComponent } from './personal-details-application-form.component';

describe('PersonalDetailsApplicationFormComponent', () => {
  let component: PersonalDetailsApplicationFormComponent;
  let fixture: ComponentFixture<PersonalDetailsApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsApplicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
