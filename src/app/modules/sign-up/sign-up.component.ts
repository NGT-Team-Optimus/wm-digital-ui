import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  yourForm!: FormGroup;
  showSignup: boolean = false;
  constructor(private fb: FormBuilder, private router: Router ) {}
 
  ngOnInit(): void {
   this.yourForm = this.fb.group({
   name: ['', [Validators.required]],
  });  
  
}
redirectToSignup2() {
  console.log('Button clicked!');
  localStorage.setItem('name', this.yourForm.value.name);
  this.router.navigate(['/signup2']);
}




steps = [' 1', ' 2', ' 3'];
  currentStep = 0;
  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }
 
redirectToSignup() {
    localStorage.setItem('name', this.yourForm.value.name);
    this.router.navigate(['/signup']);
 
 
 
 
  }
}











