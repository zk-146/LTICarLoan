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
import { RegisterComponent } from './pages/register/register.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { EmploymentDetailsComponent } from './components/employment-details/employment-details.component';
import { UserPersonalDetailsComponent } from './components/user-personal-details/user-personal-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AuthInputBoxComponent,
    FormInputBoxComponent,
    LoginComponent,
    SignupComponent,
    EligibilityFormComponent,
    NavbarComponent,
    RegisterComponent,
    AddressDetailsComponent,
    EmploymentDetailsComponent,
    UserPersonalDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [  ReactiveFormsModule, HttpClientModule, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }