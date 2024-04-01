import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNutritionListComponent } from './view-nutrition-list.component';

describe('ViewNutritionListComponent', () => {
  let component: ViewNutritionListComponent;
  let fixture: ComponentFixture<ViewNutritionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNutritionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNutritionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
