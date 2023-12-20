import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  titleS!: string;
  titleM!: string;
  titleL!: string;
  holding: string = 'holding amout: $ 0.0'
  percentage!: number;
  percentageS: number = 0;
  percentageM: number = 0;
  percentageL: number = 0;
  goals: any[] = [];
  response: any;
  constructor(private ApiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.ApiService.getUsername().subscribe(
      (data: any) => {
        this.name = data.user.username;
        this.numberOfGoals = data.numberOfGoals;
      }
    );

    this.ApiService.getUsername().subscribe(
      (data: any) => {
        const goal = data.goals;
        this.goals = goal;
        console.log(this.goals);
        this.numberOfGoals = data.numberOfGoals;
        const number1: number = this.numberOfGoals;
        let sumOfFinancialValue = 0;
        for (let i = 0; i < number1; i++) {
          sumOfFinancialValue = this.goals[i].financialGoalValue + sumOfFinancialValue;
        }
        console.log("total sum " + sumOfFinancialValue);
        let totalAmount = 0;
        for (let i = 0; i < 5; i++) {
          totalAmount = this.goals[i].totalAmount + totalAmount;
        }
        console.log("total amount " + totalAmount);
        let percent: number = (totalAmount / sumOfFinancialValue) * 100;
        console.log("total percentage " + percent);
        let floatPercnt: number = parseFloat(percent.toFixed(2));
        this.percentage = floatPercnt;
        const holding_amount = "Holding amount: $" + totalAmount;
        this.holding = holding_amount; //holding amount =  total funds - invested amount(means total amount here)
        const title1 = " " + this.percentage;
        this.title = title1;

        const totalamountSTG = data.totalAmountOfShortTermGoals;
        console.log("total short term amount " + totalamountSTG);

        const totalamountMTG = data.totalAmountOfMidTermGoals;
        console.log("total mid term amount " + totalamountMTG);

        const totalamountLTG = data.totalAmountOfLongTermGoals;
        console.log("total long term amount " + totalamountLTG);

        const totalFGVofSTG = data.totalFinancialGoalValuesOfShortTermGoals;
        console.log("total financial goal short " + totalFGVofSTG);

        const totalFGVofMTG = data.totalFinancialGoalValuesOfMidTermGoals;
        console.log("total financial goal mid " + totalFGVofMTG);

        const totalFGVofLTG = data.totalFinancialGoalValuesOfLongTermGoals;
        console.log("total financial goal long " + totalFGVofLTG);

        console.log("percentages before cal " + this.percentageS);

        let percentS: number = (totalamountSTG / totalFGVofSTG) * 100;
        let floatPercentS: number = parseFloat(percentS.toFixed(0));
        this.percentageS = floatPercentS;
        console.log("short term percentage " + floatPercentS);
        this.titleS = "" + this.percentageS;

        let percentM: number = (totalamountMTG / totalFGVofMTG) * 100;
        let floatPercentM: number = parseFloat(percentM.toFixed(0));
        this.percentageM = floatPercentM;
        console.log("mid term percentage " + floatPercentM);
        this.titleM = "" + this.percentageM;

        let percentL: number = (totalamountLTG / totalFGVofLTG) * 100;
        let floatPercentL: number = parseFloat(percentL.toFixed(0));
        this.percentageL = floatPercentL;
        console.log("Long term percentage " + floatPercentL);
        this.titleL = "" + this.percentageL;

      }
    );

  }
  //for short mid and long goals
  navigateToGoals(category: string) {
    this.router.navigate(['/goals', category]);
  }

}




