import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalModel } from 'src/app/interface/goal-model';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-goal-onboarding',
  templateUrl: './goal-onboarding.component.html',
  styleUrls: ['./goal-onboarding.component.scss']
})
export class GoalOnboardingComponent implements OnInit {

  constructor(private route:Router, private apiservice:ApiService) { }

  trueGoals: any[] = [];
  goal:any
  userid:User
  goalid:GoalModel
  duration:Date = new Date;
  financialGoalValue:Number
  selectgoal:any
  currentgoalindex=0;
  currentgoal:any

  originaldate : Date

  formatDate(date: Date): string {  
       const year = date.getFullYear();  
          const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
              const day = (date.getDate()+1).toString().padStart(2, '0'); 
                  return `${year}-${month}-${day}`;   }
formatteddate :string
newone:any




  ngOnInit(): void {

    const selectedgoal = localStorage.getItem('goalsSelect');
    //console.log(selectedgoal)
    this.selectgoal=JSON.parse(selectedgoal)
    console.log('Hello',(this.selectgoal));
    for(var i=0;i<this.selectgoal.length;i++)
    {
      // console.log("iletrate",JSON.stringify(this.selectgoal[i].goalName))
     // console.log(this.selectgoal[i].goalName);
      // console.log(selectedgoal)

    } 
    this.currentgoal= this.selectgoal[this.currentgoalindex]
    
     }
     routerto(){
        this.route.navigate(['dashboard'])
     }

  updategoal()
  {
    // const result :any[]=[]
    // for(var i=0;i<=this.selectgoal.length;i++)
    // {
    //   console.log("iletrate",JSON.stringify(this.selectgoal[i].goalName))
    //   result.push(JSON.stringify(this.selectgoal[i].goalName));
    // }
    // console.log("------",JSON.stringify(result));
    // return result;

  }


  save()
  {
    this.currentgoalindex= (this.currentgoalindex +1) % this.selectgoal.length;
    this.currentgoal= this.selectgoal[this.currentgoalindex]
    const goallid=this.currentgoal.goalId;
    console.log(goallid)
    console.log('Current gOal',this.currentgoal);
    console.log('lets see',this.selectgoal[this.currentgoalindex])

    const goalid= this.selectgoal[this.currentgoalindex].goalId
    console.log(goalid)

    for(let i=0;i<this.selectgoal.length;i++)
    {
      console.log(this.selectgoal[i])
    }
    
    const userId = localStorage.getItem('userId');
    console.log(userId)
    
    const userAndGoals = {
      user: {
        userId: userId,
      },
      goals: this.trueGoals,
    };
    console.log(this.duration )
    this.originaldate = new Date(this.duration)
    this.formatteddate = this.formatDate(this.originaldate);
    // this.formatteddate = this.formatDate(this.duration);
    console.log(this.formatteddate)
    console.log((this.financialGoalValue))
    this.apiservice.retrievegoals(userId, goalid, this.formatteddate, this.financialGoalValue, userAndGoals).subscribe((data)=>
    {
      console.log(data); 
      console.log(JSON.stringify(data.numberOfGoals)) 
      this.newone=JSON.stringify(data.numberOfGoals)
      console.log(this.newone)
    })
    
    console.log(this.selectgoal.length )
    const newdata = this.selectgoal.length

    console.log("Index",this.currentgoalindex)
   
    if(this.currentgoalindex==4)
    {
      this.routerto();
    }

    console.log(userAndGoals)
  }

}
