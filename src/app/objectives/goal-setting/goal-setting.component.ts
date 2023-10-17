import { Component, OnInit } from '@angular/core';
import { GoalModel } from 'src/app/goal-model';
import { GoalsService } from 'src/app/goals.service';

@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.scss']
})
export class GoalSettingComponent implements OnInit {

  constructor(private goalService: GoalsService) { }
  goalModel: GoalModel = new GoalModel()
  buttonValue: string = '';
  ngOnInit(): void {

  }
  getValue(buttonValue: string) {
    console.log(buttonValue);
  }
  onClick() {
    this.goalService.updateData(this.goalModel).subscribe(data => {
      alert("send success")
    }, error => alert("type correct data"));
  }
}
