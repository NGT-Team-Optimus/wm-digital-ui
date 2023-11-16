import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GoalModel } from '../interface/goal-model';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {


  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllUsers(): Observable<GoalModel[]> {
    return this.httpClient.get<GoalModel[]>('http://localhost:8080/goals/get');
  }
}
