import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './modules/login/login.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { OtpComponent } from './otp/otp.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SettingPasswordComponent } from './modules/setting-password/setting-password.component';
import { LoginHeaderComponent } from './layout/login-header/login-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { objectiveModule } from './objectives/objective.module';



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
    OtpComponent,
    SettingPasswordComponent,
    LoginHeaderComponent,

  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // BrowserAnimationsModule
    objectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
