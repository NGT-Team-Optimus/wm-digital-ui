import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //name : string = 'Hola, Sam';
  name: string | undefined;
  numberOfGoals!: number;
  title!: string;
  holding : string = 'holding amout: $ 0.0'
   percentage!: number;
  goals: any[] = [];

response: any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {

    this.ApiService.getUsername().subscribe(
      (data: any) => {
        this.name = data.user.username;
        this.numberOfGoals = data.numberOfGoals;
      }
    );
      this.ApiService.getUsername().subscribe(
        (data: any) => {
         const  goal = data.goals;
         this.goals = goal;
          console.log(this.goals);
          this.numberOfGoals = data.numberOfGoals;
          const number1 : number= this.numberOfGoals;
          let sumOfFinancialValue =0;
          for (let i=0; i< number1; i++ ){
            sumOfFinancialValue= this.goals[i].financialGoalValue+sumOfFinancialValue;
          }
          console.log("total sum "+sumOfFinancialValue);
          let totalAmount = 0;
          for ( let i=0; i<5; i++){
            totalAmount = this.goals[i].totalAmount + totalAmount;
          }
          console.log("total amount "+totalAmount);
          let percent: number = (totalAmount/sumOfFinancialValue)*100;
          console.log("total percentage "+percent);
          let floatPercnt: number = parseFloat(percent.toFixed(2));
          this.percentage = floatPercnt;
          const holding_amount = "Holding amount: $"+totalAmount;
          this.holding = holding_amount;
          const title1 = " "+this.percentage;
          this.title = title1;
        }
      );
      
     
      

  }
  
  
        
}


