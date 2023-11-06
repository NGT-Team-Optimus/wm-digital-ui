import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsSettingComponent } from './goals-setting.component';

describe('GoalsSettingComponent', () => {
  let component: GoalsSettingComponent;
  let fixture: ComponentFixture<GoalsSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
