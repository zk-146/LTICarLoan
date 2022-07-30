import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInputBoxComponent } from './components/auth-input-box/auth-input-box.component';
import { FormInputBoxComponent } from './components/form-input-box/form-input-box.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EligibilityFormComponent } from './pages/eligibility-form/eligibility-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactDetailsFormComponent } from './components/contact-details-form/contact-details-form.component';
import { VehicleDetailsFormComponent } from './components/vehicle-details-form/vehicle-details-form.component';
import { PersonalDetailsFormComponent } from './components/personal-details-form/personal-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthInputBoxComponent,
    FormInputBoxComponent,
    LoginComponent,
    SignupComponent,
    EligibilityFormComponent,
    NavbarComponent,
    ContactDetailsFormComponent,
    VehicleDetailsFormComponent,
    PersonalDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }