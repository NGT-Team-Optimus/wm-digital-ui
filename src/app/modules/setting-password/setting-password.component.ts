import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotpasswordService } from 'src/app/services/forgotpassword.service';




@Component({
  selector: 'app-setting-password',
  templateUrl: './setting-password.component.html',
  styleUrls: ['./setting-password.component.scss']
})
export class SettingPasswordComponent implements OnInit {
  newPassword: string = '';
  // Initialize with an empty strin // Initialize with an empty string
  token: string = '';
  // generatedOTP: string = '';
  email: any = localStorage.getItem('email');
  code: any = localStorage.getItem('token');


  constructor(
    private userService: ForgotpasswordService,
    private router: Router,
    private route: ActivatedRoute,


  ) { }


  ngOnInit() {
    // Get the email and code from the route's query parameters

  }



  setNewPassword() {


    this.userService.confirmPassword(this.email, this.code, this.newPassword).subscribe(
      (result) => {
        console.log(result); // Log the response to the console
        alert("Password change result: ");
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle the error (e.g., display an error message)
      }
    );
  }


}
