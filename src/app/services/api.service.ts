
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GoalModel } from '../interface/goal-model';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  private token: string | null;
  private userId: string | null;
  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId');

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setUserId(userId: string): void {
    this.userId = userId;
    localStorage.setItem('userId', userId);
  }
  getUserId(): string | null {
    return this.userId
  }
  getAllUsers(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>('http://localhost:8080/goals/get');
  }
  goalDurationS(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>(`http://localhost:8080/getGoals/${this.userId}/shortTerm`);
  }
  goalDurationM(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>(`http://localhost:8080/getGoals/${this.userId}/midTerm`);
  }
  goalDurationL(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>(`http://localhost:8080/getGoals/${this.userId}/longTerm`);
  }

  generateToken(request: any): Observable<any> {
    return this.http.post('http://localhost:8080/user/signin', request);
  }
  saveGoals(userId: string, selectedGoals: GoalModel[]): Observable<any> {
    const data = { userId, selectedGoals };
    return this.http.post<any>('http://localhost:8080/addGoals', { userId, goals: selectedGoals })
  }
  getUsername(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserGoalByUserId/${this.userId}`)
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
    this.userId = null;
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  isLoggedIn(): boolean {
    return !!this.token;
    return !!this.userId;
  }


}
