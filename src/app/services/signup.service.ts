import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private http: HttpClient) { }
    register(formData: any): Observable<any> {
      const backendUrl = 'http://localhost:8090/user/signup';
   
      return this.http.post(backendUrl, formData);
    }
  }