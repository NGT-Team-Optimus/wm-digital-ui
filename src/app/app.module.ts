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
<<<<<<< HEAD
import { AuthenticationComponent } from './authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
=======
import { LoginHeaderComponent } from './layout/login-header/login-header.component';

>>>>>>> a44402c2e73374c44ca997d4f6b5722094238baa

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
<<<<<<< HEAD
    AuthenticationComponent
=======
    LoginHeaderComponent
>>>>>>> a44402c2e73374c44ca997d4f6b5722094238baa
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
