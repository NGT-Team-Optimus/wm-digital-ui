import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-onboarding',
  templateUrl: './goals-onboarding.component.html',
  styleUrls: ['./goals-onboarding.component.scss']
})
export class GoalsOnboardingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSave(): void{
    console.log('Save button clicked! Perform saving logic here.');
  }
}
