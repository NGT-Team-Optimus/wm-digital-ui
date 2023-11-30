import { Component, OnInit } from '@angular/core';
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
  constructor(private ApiService: ApiService) { }

  userLogin(data: any) {
    console.log(data);
    console.log(this.user);
    this.ApiService.generateToken(data).subscribe(
      response => {
        const token = response.token;
        const userId = response.userId
        this.ApiService.setToken(token)
        this.ApiService.setUserId(userId)
        console.log(token);
        console.log(userId);
      }
    )
  }

  ngOnInit(): void {
  }
}
