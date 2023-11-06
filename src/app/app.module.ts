import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './modules/login/login.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { GoalsComponent } from './modules/goals/goals.component';
import { GoalsSettingComponent } from './modules/goals-setting/goals-setting.component';
import { GoalsOnboardingComponent } from './modules/goals-onboarding/goals-onboarding.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    SignUpComponent,
    DashboardComponent,
    PortfolioComponent,
    GoalsComponent,
    GoalsSettingComponent,
    GoalsOnboardingComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
