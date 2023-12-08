import { compileNgModule } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { GoalSettingComponent } from './objectives/goal-setting/goal-setting.component';
import { GoalsComponent } from './objectives/goals/goals.component';
import { LoginComponent } from './modules/login/login.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginHeaderComponent } from './layout/login-header/login-header.component';
import { AuthGaurdService } from './services/auth-gaurd.service';


const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [{ path: '', component: LoginHeaderComponent }]
  },
  {
    path: 'login',
    component: MainComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: 'forgotPassword',
    component: MainComponent,
    children: [{ path: '', component: ForgotPasswordComponent }]
  },
  {
    path: 'header',
    component: MainComponent,
    children: [{ path: '', component: HeaderComponent }]
  },
  {
    path: 'signUp',
    component: MainComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'dashboard',
    component: MainComponent,
    children: [{ path: '', component: DashboardComponent }],
    canActivate : [AuthGaurdService]
  },
  {
    path: 'portfolio',
    component: MainComponent,
    children: [{ path: '', component: PortfolioComponent }],
    canActivate: [AuthGaurdService]

  },
  {
    path: 'goals',
    component: MainComponent,
    children: [{ path: '', component: GoalsComponent }]
  },
  {
    path: 'goal-setting',
    component: MainComponent,
    children: [{ path: '', component: GoalSettingComponent }]
  },
  {
    path: 'goals/:category',
    component: GoalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
