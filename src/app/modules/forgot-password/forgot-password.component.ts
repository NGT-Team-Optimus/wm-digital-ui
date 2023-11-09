import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotpasswordserviceService } from 'src/app/service/forgotpasswordservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService:ForgotpasswordserviceService,private router: Router) { }
  email: string = '';
  currentStep = 1;

  

  ngOnInit(): void {
  }
  sendVerificationCode() {
    this.userService.forgotPassword(this.email).subscribe(
      (token) => {
        // Handle the response here (e.g., show a success message)
        this.router.navigate(['/otp'], { queryParams: { email: this.email } });
      },
      (error) => {
        // Handle the error (e.g., display an error message)
      }
    );
  }
  
 
  

}
