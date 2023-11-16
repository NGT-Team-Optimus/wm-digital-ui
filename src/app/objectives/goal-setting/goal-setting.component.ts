
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { GoalModel } from 'src/app/interface/goal-model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.scss']
})
export class GoalSettingComponent implements OnInit {

  goalModel: GoalModel[] = []
  trueGoals: any[] = [];
  maxButtons = 5;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllGoals();
  }

  getAllGoals() {
    this.apiService.getAllUsers().subscribe(
      (data) => { this.goalModel = data; }
    );
    console.log(this.goalModel)
  }

  onChange(goalModel: any) {
    goalModel.forEach((goal: { goalId: any; goalName: any; duration: any; financialGoalValue: any; isSelected: any; }) => {
      if (goal.isSelected === true) {
        this.trueGoals.push(goal)
      }
    });
    console.log(this.trueGoals)
  }
  onCheckboxChange(goalModel: GoalModel[]) {
    for (const goal of goalModel) {
      goal.isSelected = !goal.isSelected;
    }
  }
  countSelectedGoals(): number {
    return this.goalModel.filter((goal) => goal.isSelected).length;
  }
}

