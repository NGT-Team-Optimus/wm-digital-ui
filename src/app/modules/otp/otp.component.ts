import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForgotpasswordserviceService } from 'src/app/service/forgotpasswordservice.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  digit1: string = '';
  digit2: string = '';
  digit3: string = '';
  digit4: string = '';
  generatedOTP: string = '';
  errorMessage: string = '';
  email: string = '';
  otp: string = '';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: ForgotpasswordserviceService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
    localStorage.setItem('email',this.email);
  }

  ngOnInit(): void {
    // Retrieve the email from query parameters
    this.route.queryParams.subscribe((params) => {
      const email = params['email'];
      if (email) {
        // Fetch OTP for the given email
        this.fetchOTP(email);
      }
    });
  }
  
  fetchOTP(email: string) {
    this.userService.getGeneratedOTP(email).subscribe(
      (otp) => {
        this.generatedOTP = otp;
        localStorage.setItem("token",this.generatedOTP);
      },
      (error) => {
        this.errorMessage = 'Error fetching OTP. Please try again later.';
      }
    );
  }

  verifyOtp() {
    const enteredOTP = this.digit1 + this.digit2 + this.digit3 + this.digit4;
    if (enteredOTP === localStorage.getItem('token')) {
      this.router.navigate(['/newpassword']);
    } else {
      this.errorMessage = 'Invalid OTP. Please try again.';
    }
  }
}
