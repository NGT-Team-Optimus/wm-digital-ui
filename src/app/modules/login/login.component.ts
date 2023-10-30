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
 /*
   authRequest: any = {
    "email": "name1@gmail.com",
    "password" : "name123"
   }
   */
   userLogin(data:any){
    const email = this.user.email;
    const password = this.user.password;
    console.log('username:', email, password);
    console.log(data);
    let resp = this.ApiService.generateToken(data);
   console.log(data);
    resp.subscribe(data => console.log("token : "+data));
  }
   response: any
   constructor(private ApiService: ApiService) { }

   ngOnInit(): void {
    //this.getAccessToken(this.user);
  }
   
 /* public getAccessToken(user: any){
    let resp = this.ApiService.generateToken(user);
   console.log(user);
    resp.subscribe(data => console.log("token : "+data));
   }

 /*  login(): void {
   let resp =  this.ApiService.login(this.email, this.password);
    resp.subscribe(data => console.log("token : "+data));
  }*/
  


}
