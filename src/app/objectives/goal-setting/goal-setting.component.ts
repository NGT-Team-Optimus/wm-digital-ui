import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { GoalModel } from 'src/app/service/goal-model';


@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.scss']
})
export class GoalSettingComponent implements OnInit {
  goalModel: GoalModel[] = [];
  constructor(private apiService: ApiService) { }
  buttonValue: string[] = [];


  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(
      (data) => { this.goalModel = data }
    );
  }
}
