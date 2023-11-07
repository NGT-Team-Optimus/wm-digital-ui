import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token : string | null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
   }
 generateToken(request: any): Observable<any>{
  return this.http.post('http://localhost:8090/user/signin', request);
 }

  setToken(token: string): void{
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null{
    return this.token;
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

}
