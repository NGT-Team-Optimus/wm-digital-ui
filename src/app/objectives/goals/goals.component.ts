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


  goals: GoalModel[] = [];
  getImagePath(goalName: string): string {
    const imageMapping: { [key: string]: string } = {
      'marriage': 'marriage.png',
      'honeymoon': 'honeymoon.png',
      'kids': 'kids.png',
      'vaccation': 'vaccation.png',
      'car': 'car.png',
      'super cars': 'car.png',
      'children education': 'ceducation.png',
      'villa': 'villa.png',
      'buy land': 'buyland.png',
      'apartment': 'apartment.png',
      'marriage anniversary': 'marriage.png',
      'tomorrowland': 'buyland.png',
      'parent marriage anniversary': 'marrige.png',
      'super bikes': 'bike.png',
      'enterpreneurship': 'enterprenuer.jpg',
      'superbike': 'bike.png',
      'higher education': 'higher.png',
      'family foreign tour': 'tour.png'



    };
    const imageFilename = imageMapping[goalName.toLowerCase()];
    return `./assets/images/${imageFilename}`;

  }

  goForward() {
    if (this.currentHeading < 3) {
      this.currentHeading++;
      this.loadGoals();
    }
  }

  goBackward() {
    if (this.currentHeading > 1) {
      this.currentHeading--;
      this.loadGoals();
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
    this.loadGoals();
  }
  loadGoals() {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.apiService.setUserId(userId);
      if (this.currentHeading === 1) {
        this.apiService.goalDurationS().subscribe(
          data => {
            this.goals = data
            imageUrl: './assets/images/'

          },
          error => {
            console.log('Error fetching:', error);
          }
        );
      }
      else if (this.currentHeading === 2) {
        this.apiService.goalDurationM().subscribe(
          data => {
            this.goals = data
          },
          error => {
            console.log('Error fetching:', error);
          }
        );
      }
      else if (this.currentHeading === 3) {
        this.apiService.goalDurationL().subscribe(
          data => {
            this.goals = data
          },
          error => {
            console.log('Error fetching:', error);
          }
        );
      }
    } else {
      console.log('User ID not found in localStorage');
    }
  }
}
