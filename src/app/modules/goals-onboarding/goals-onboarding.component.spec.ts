import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsOnboardingComponent } from './goals-onboarding.component';

describe('GoalsOnboardingComponent', () => {
  let component: GoalsOnboardingComponent;
  let fixture: ComponentFixture<GoalsOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
