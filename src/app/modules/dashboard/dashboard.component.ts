import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //name : string = 'Hola, Sam';
  name: string | undefined;
  numberOfGoals: string | undefined ;

response: any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getUsername().subscribe(
      (data: any) => {
        this.name = data.user.username;
        console.log(data);
        this.numberOfGoals = data.numberOfGoals;
      }
    );
    
  }
        
}
