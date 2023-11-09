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
import { LoginHeaderComponent } from './layout/login-header/login-header.component';
import { objectiveModule } from './objectives/objective.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SettingPasswordComponent } from './modules/setting-password/setting-password.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { OtpComponent } from './modules/otp/otp.component';
import { FormsModule } from '@angular/forms';


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
    LoginHeaderComponent,
    SettingPasswordComponent,
    AuthenticationComponent,
    OtpComponent,



  ],
  imports: [
    AppRoutingModule,
    objectiveModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }