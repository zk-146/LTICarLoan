import { RegisterComponent } from './pages/register/register.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanOfferComponent } from './components/loan-offer/loan-offer.component';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { EligibilityFormComponent } from './pages/eligibility-form/eligibility-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"eligibility-form",component:EligibilityFormComponent},
  {path:"emi-calculator",component:EmiCalcComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:"loan-offer",component:LoanOfferComponent},
  {path:"application-form",component:ApplicationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
