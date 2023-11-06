import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-setting',
  templateUrl: './goals-setting.component.html',
  styleUrls: ['./goals-setting.component.scss']
})
export class GoalsSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSave(): void{
    console.log('Save button clicked! Perform saving logic here.');
  }
}
