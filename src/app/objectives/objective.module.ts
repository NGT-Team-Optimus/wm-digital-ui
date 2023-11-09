import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { GoalSettingComponent } from "./goal-setting/goal-setting.component";
import { GoalsComponent } from "./goals/goals.component";


@NgModule({
    declarations: [
        GoalsComponent,
        GoalSettingComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

    ],
    providers: [],
    bootstrap: []

})
export class objectiveModule { }