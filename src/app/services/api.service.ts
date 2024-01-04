
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GoalModel } from '../interface/goal-model';
import { map } from 'rxjs/operators';
import { Fund } from '../interface/fund';


@Injectable({
  providedIn: 'root'
})



export class ApiService implements OnInit {


  private token: string | null;
  private userId: string | null;
  private baseUrl = 'http://localhost:8080';


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
    return this.http.get<GoalModel[]>(`${this.baseUrl}/goals/get`);
  }
  goalDurationS(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>(`${this.baseUrl}/getGoals/${this.userId}/shortTerm`);
  }
  goalDurationM(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>(`${this.baseUrl}/getGoals/${this.userId}/midTerm`);
  }
  goalDurationL(): Observable<GoalModel[]> {
    return this.http.get<GoalModel[]>(`${this.baseUrl}/getGoals/${this.userId}/longTerm`);
  }
  addGoalsByUser(userAndGoals: any): Observable<any> {
    const url = `${this.baseUrl}/addGoals`;
    return this.http.post(url, userAndGoals);
  }

  generateToken(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/signin`, request);
  }
  saveGoals(userId: string, selectedGoals: GoalModel[]): Observable<any> {
    const data = { userId, selectedGoals };
    return this.http.post<any>(`${this.baseUrl}/addGoals`, { userId, goals: selectedGoals })
  }
  getUsername(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserGoalByUserId/${this.userId}`)
  }

  getFundValue(): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${this.baseUrl}/getAllAvailableFunds`);
  }

  getNotifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/notifications/user/${this.userId}/latest`);
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
