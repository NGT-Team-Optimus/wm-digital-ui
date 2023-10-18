import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {


  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getAllUsers(): Observable<any> {
    return this.httpClient.get("http://localhost:8095/goals/get");
  }
}
