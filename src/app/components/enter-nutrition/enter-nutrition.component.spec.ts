import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNutritionComponent } from './enter-nutrition.component';

describe('EnterNutritionComponent', () => {
  let component: EnterNutritionComponent;
  let fixture: ComponentFixture<EnterNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
