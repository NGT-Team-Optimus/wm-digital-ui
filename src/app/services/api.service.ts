import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoalModel } from '../interface/goal-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  private token : string | null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
   }
 ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getAllUsers(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>('http://localhost:8090/goals/get');
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
