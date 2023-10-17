import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoalModel } from './goal-model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private baseUrl = 'http://localhost:8095/user/update';
  http: any;
  constructor(private httpClient: HttpClient) { }
  // goalSetting(goalModel: GoalModel): Observable<object> {
  //   return ();
  // }
  updateData(goalModel: GoalModel): Observable<any> {
    return this.httpClient.post("http://localhost:8095/user/update", goalModel);
  }

}
