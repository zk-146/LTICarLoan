import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { EligibilityFormComponent } from './pages/eligibility-form/eligibility-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"eligibility-form",component:EligibilityFormComponent},
  {path:"emi-calculator",component:EmiCalcComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
