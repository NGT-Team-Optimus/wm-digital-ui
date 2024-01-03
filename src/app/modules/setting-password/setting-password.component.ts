import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotpasswordService } from 'src/app/services/forgotpassword.service';






@Component({
  selector: 'app-setting-password',
  templateUrl: './setting-password.component.html',
  styleUrls: ['./setting-password.component.scss']
})
export class SettingPasswordComponent implements OnInit {
  newPassword: string = '';
  email: string = '';
  code: string = '';

  constructor(
    private userService: ForgotpasswordService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get the email and code from the route's query parameters
    this.email = localStorage.getItem('email') || '';
    this.code = localStorage.getItem('token') || '';
  }

  setNewPassword() {
    this.userService.confirmPassword(this.email, this.code, this.newPassword).subscribe(
      (result: any) => {
        console.log(result); // Log the response to the console

        if (result.includes('Password has changed successfully')) {
          alert("Password change successful");
          localStorage.removeItem('email');
          localStorage.removeItem('token');
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Unexpected response during password change:', result);
        }
      },
      (error) => {
        console.error('Error during password change:', error);
      }
    );
  }
}