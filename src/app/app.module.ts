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

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

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
    LoginHeaderComponent,

  ],
  imports: [
    AppRoutingModule,

   HttpClientModule,
   FormsModule,
    // BrowserAnimationsModule

    objectiveModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
