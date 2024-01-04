
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator } from '@angular/forms';
import { GoalModel } from 'src/app/interface/goal-model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.scss']
})
export class GoalSettingComponent implements OnInit {

  goalModel: GoalModel[] = []
  trueGoals: any[] = [];
  maxButtons = 5;
  constructor(private apiService: ApiService,private router:Router) {
  }

  ngOnInit(): void {
    this.getAllGoals();
  }

  getAllGoals() {
    this.apiService.getAllUsers().subscribe(
      (data) => { this.goalModel = data; }
    );
    console.log(this.goalModel);

  }
  addGoalsWithUserId() {
    const userId = localStorage.getItem('userId');
    this.trueGoals = this.goalModel.filter((goal) => goal.isSelected);
    const userAndGoals = {
      user: {
        userId: userId,
      },
      goals: this.trueGoals,
    };

    this.apiService.addGoalsByUser(userAndGoals).subscribe(
      (response) => {
        console.log('Goals added successfully');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error adding goals', error);
      }
    );
    console.log(userAndGoals);
  }
  onCheckboxChange(goalModel: GoalModel[]) {
    for (const goal of goalModel) {
      goal.isSelected = !goal.isSelected;
      this.trueGoals.push(goal);
    }
  }
  countSelectedGoals(): number {
    return this.goalModel.filter((goal) => goal.isSelected).length;
  }

}
