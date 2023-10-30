import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  generateToken(request: any){
    return this.http.post("http://localhost:8090/user/signin",request, {responseType: 'text' as 'json'});
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post(`http://localhost:8090/user/signin`, { email, password });
  }
  /*
  welcome(token: string){
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get('url', {headers, responseType: 'text' as 'json'})
  }
  */

  register(userId: string){
  //  return this.http.post(url,{});
  }

  confirmSignup(email: string){
   // return this.http.put(url, {});
  }
}
