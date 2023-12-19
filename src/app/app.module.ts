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
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { CommonModule } from '@angular/common';



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
    NotificationsComponent,

  ],
  imports: [
    AppRoutingModule,

   HttpClientModule,
   FormsModule,
   CommonModule,
    // BrowserAnimationsModule

    NgCircleProgressModule.forRoot({
      "backgroundStrokeWidth": 0,
      "backgroundPadding": 0,
      "radius": 67,
      "space": -20,
      "toFixed": 0,
      "maxPercent": 100,
      "unitsColor": "#2d1daa",
      "outerStrokeWidth": 40,
      "outerStrokeColor": "#2327a4",
      "outerStrokeGradientStopColor": "#10477e",
      "outerStrokeLinecap": "butt",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 100,
      "title": "0",
      "titleColor": "#1c38a6",
      "titleFontWeight": "600",
      "subtitleColor": "#271577",
      "subtitleFontWeight": "600",
      "imageHeight": 20,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "showBackground": false,
      "lazy": true}),
  

    objectiveModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
