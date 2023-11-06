
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { GoalModel } from 'src/app/service/goal-model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.scss']
})
export class GoalSettingComponent implements OnInit {
  goalModel: GoalModel = new GoalModel();
  selectedButtons: string[] = [];
  selectedGoals: GoalModel[] = [];
  trueGoals: GoalModel[] = [];

  constructor(private apiService: ApiService, private fb: FormBuilder) {
  }
  getGoals() {
    this.selectedGoals = [
      { goalId: 1, goalName: "Marrige", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 2, goalName: "Childern Marrige", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 3, goalName: "Car", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 4, goalName: "Villa", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 5, goalName: "Apartment", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 6, goalName: "Buy Land", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 7, goalName: "Marrige Anniversary", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 8, goalName: "Super Bikes", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 9, goalName: "Enterpreneurship", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 10, goalName: "Parent Marrige Anniversary", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 11, goalName: "Super Cars", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 12, goalName: "Superbike", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 13, goalName: "TomorrowLand", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 14, goalName: "Higher Education", duration: 0, financialGoalValue: 0, isSelected: false },
      { goalId: 15, goalName: "Family Foreign Tour", duration: 0, financialGoalValue: 0, isSelected: false },

    ]
  }
  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(
      (data) => { this.goalModel = data }
    );
  }

  buttonNames: string[] = [];
  maxButtons = 5;

  onChange(selectedGoals: any) {
    selectedGoals.forEach((goal: { goalId: any; goalName: any; duration: any; financialGoalValue: any; isSelected: any; }) => {
      if (goal.isSelected === true) {
        this.trueGoals.push(goal)
      }
    });
    console.log(this.trueGoals)
  }

  onCheckboxChange(selectedGoals: GoalModel[]) {
    for (const goal of selectedGoals) {
      goal.isSelected = !goal.isSelected;
    }
  }
  countSelectedGoals(): number {
    return this.selectedGoals.filter((goal) => goal.isSelected).length;
  }
}

class goalModel {
  goalId!: number;
  goalName!: string;
  isSelected!: boolean;
}
