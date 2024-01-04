import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  private baseUrl = 'http://localhost:8090';
 // Replace with your API endpoint

 constructor(private http: HttpClient) { }

 getGeneratedOTP(email: string): Observable<string> {
  return this.http.get<string>(`${this.baseUrl}/user/api/forget_password/${email}`);
}

// Define a method to initiate the forgot password process
forgotPassword(email: string): Observable<string> {
  return this.http.get<string>(`${this.baseUrl}/user/api/forget_password/${email}`);
}

  // Define a method to confirm a new password after forget password
  confirmPassword(email: string, code: string, newPassword: string): Observable<string> {
    const request = { email, code, newPassword };
    return this.http.post<string>(`${this.baseUrl}/user/api/confirm_password`, request);
  }


}
