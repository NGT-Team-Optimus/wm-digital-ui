import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  currentHeading: number = 1;
  heading: string = 'Short Term';
  goForward() {
    if (this.currentHeading < 3) {
      this.currentHeading++;
    }
  }

  goBackward() {
    if (this.currentHeading > 1) {
      this.currentHeading--;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
