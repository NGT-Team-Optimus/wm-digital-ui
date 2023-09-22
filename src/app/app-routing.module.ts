import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { CodeverificationComponent } from './components/codeverification/codeverification.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'forgotpassword', component: ForgotpasswordComponent},
{path:'codeverification', component: CodeverificationComponent},
{path: 'newpassword', component: NewpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
