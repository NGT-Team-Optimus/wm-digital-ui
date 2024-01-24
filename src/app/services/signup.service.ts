import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private http: HttpClient) { }
  register(username: string, email: string, password: string, userSSN: string): Observable<any> {
    return this.http.post('http://localhost:8082/user/signup', { username, email, password, userSSN });


  }
}