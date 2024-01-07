import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  response: any
  constructor(private ApiService: ApiService,private router:Router) { }

  userLogin(data: any) {
    console.log(data);
    console.log(this.user);
    this.ApiService.generateToken(data).subscribe(
      response => {
        const token = response.token;
        const userId = response.userId;
        this.ApiService.setUserId(userId);
        
        this.ApiService.setToken(token)
        
        
        console.log(userId);
        this.router.navigate(['/dashboard']);
      }
    )
  }

  ngOnInit(): void {
  }
}
