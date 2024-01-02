import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  fundForm: FormGroup;
  ngOnInit(): void {
    this.fundForm = this.fb.group({
      dropdown1: ['', Validators.required],
      dropdown2: ['', Validators.required],
      numberInput: [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });
  }

  onSubmit() {
    console.log(this.fundForm.value);
  }

}
