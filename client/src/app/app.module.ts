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
import { UserPersonalDetailsComponent } from './pages/register/user-personal-details/user-personal-details.component';

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
    UserPersonalDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }