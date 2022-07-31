import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ApplicationStatusUpdateComponent } from './pages/application-status-update/application-status-update.component';
import { EligibilityFormComponent } from './pages/eligibility-form/eligibility-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"eligibility-form",component:EligibilityFormComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:"application-status-update",component:ApplicationStatusUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
