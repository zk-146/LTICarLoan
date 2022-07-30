import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { PersonalDetailsApplicationFormComponent } from './components/application-form/personal-details-application-form/personal-details-application-form.component';
import { EmploymentDetailsApplicationFormComponent } from './components/application-form/employment-details-application-form/employment-details-application-form.component';
import { VehicleDetailsApplicationFormComponent } from './components/application-form/vehicle-details-application-form/vehicle-details-application-form.component';
import { LoanDetailsApplicationFormComponent } from './components/application-form/loan-details-application-form/loan-details-application-form.component';
import { IdentityDetailsApplicationFormComponent } from './components/application-form/identity-details-application-form/identity-details-application-form.component';

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
    ApplicationFormComponent,
    PersonalDetailsApplicationFormComponent,
    EmploymentDetailsApplicationFormComponent,
    VehicleDetailsApplicationFormComponent,
    LoanDetailsApplicationFormComponent,
    IdentityDetailsApplicationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }