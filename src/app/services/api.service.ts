import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoalModel } from '../interface/goal-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  private token: string | null;
  private userId: string | null;
  private baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getAllUsers(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>(`${this.baseUrl}/goals/get`);
  }

  generateToken(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/signin`, request);
  }

  getUsername(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserGoalByUserId/${this.userId}`)
  }

  getUserId(): string | null {
    return this.userId;
  }
  setUserId(userId: string): void {
    this.userId = userId;
    localStorage.setItem('userId', userId);
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
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
