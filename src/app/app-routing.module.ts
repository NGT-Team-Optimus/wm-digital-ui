import { compileNgModule } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { GoalsComponent } from './modules/goals/goals.component';
import { LoginComponent } from './modules/login/login.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { OtpComponent } from './otp/otp.component';
import { SettingPasswordComponent } from './modules/setting-password/setting-password.component';


const routes: Routes = [
  // { 
  //   path: 'login', 
  //   component: MainComponent ,
  //   children:[{path:'', component: LoginComponent}]
  // },
  // { 
  //   path: 'forgotPassword', 
  //   component: MainComponent,
  //   children:[{path:'', component: ForgotPasswordComponent}] 
  // },
  // {
  //   path: 'header',
  //   component: MainComponent,
  //   children:[{path:'', component: HeaderComponent}]
  // },
  // { 
  //   path: 'signUp', 
  //   component: MainComponent,
  //   children:[{path:'', component: SignUpComponent}] 
  // },
  // { 
  //   path: 'dashboard', 
  //   component: MainComponent,
  //   children:[{path:'', component: DashboardComponent}] 
  //  },
  // { 
  //   path: 'portfolio', 
  //   component: MainComponent,
  //   children:[{path:'', component: PortfolioComponent}] 
  // },
  // { 
  //   path: 'goals', 
  //   component: MainComponent,
  //   children:[{path:'', component: GoalsComponent}] 
  // },

  { path: '', component: ForgotPasswordComponent },
  {path: 'otp', component: OtpComponent},
   {path:'newpassword',component:SettingPasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}
  
   
  // {
  //   path: 'codeverification', component: OtpComponent
  // },

  
  // {
  //   path: 'otp', component: OtpComponent
           
  // },
  
  // {
  //   path: 'pr', component: SettingPasswordComponent
  // },

  // {
  //   path:'newpassword',component:SettingPasswordComponent
  // }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
