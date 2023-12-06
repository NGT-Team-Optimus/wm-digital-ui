import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalModel } from 'src/app/interface/goal-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  currentHeading: number = 1;
  heading: string = 'Short Term';
  private colors = ['#A291EE', '#f4f7e6', '#91EED2'];
  private currentIndex = 0;
  currentColor = this.colors[this.currentIndex];
  rotationAngle: number = 0;

  get rotateStyle(): string {
    return `rotate(${this.rotationAngle}deg)`;
  }

  rotateImage(): void {
    this.rotationAngle += 90;
  }

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
  onForwardClick() {
    if (this.currentIndex < this.colors.length - 1) {
      this.currentIndex++;
      this.currentColor = this.colors[this.currentIndex];
    }
    return this.currentIndex === this.colors.length - 1;
  }

  onBackwardClick() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentColor = this.colors[this.currentIndex];
    }
    return this.currentIndex === 0;
  }
  forwardButton() {
    this.goForward();
    this.onForwardClick();

  }
  backwardButton() {
    this.goBackward();
    this.onBackwardClick();
  }
  //adding changes 
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
   
  }
 
}
