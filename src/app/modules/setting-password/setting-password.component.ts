import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotpasswordserviceService } from 'src/app/service/forgotpasswordservice.service';

@Component({
  selector: 'app-setting-password',
  templateUrl: './setting-password.component.html',
  styleUrls: ['./setting-password.component.scss']
})
export class SettingPasswordComponent implements OnInit {
  newPassword: string = '';
   // Initialize with an empty strin // Initialize with an empty string
  token: string = '';

  constructor(
    private userService: ForgotpasswordserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get the email and code from the route's query parameters
    
  }
email:any=localStorage.getItem('email')
code:any=localStorage.getItem('token')


  setNewPassword() {
    alert( this.newPassword),
    this.userService.confirmPassword(this.email, this.code, this.newPassword).subscribe(
      (result) => {
        console.log(result); // Log the response to the console
        alert("Password change result: ");
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle the error (e.g., display an error message)
      }
    );
  }
  
}
