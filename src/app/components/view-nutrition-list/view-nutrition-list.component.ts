import { Component } from '@angular/core';
import { NutritionDataService } from 'src/app/services/nutrition-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-nutrition-list',
  templateUrl: './view-nutrition-list.component.html',
  styleUrls: ['./view-nutrition-list.component.scss']
})
export class ViewNutritionListComponent {
  formDataArray: any[] = [];
  totalCalories: number = 0;
  totalCarbohydrates: number = 0;
  totalProtein: number = 0;
  totalFat: number = 0;
  isAtRiskOfDiabetes: boolean = false;
  calorieThreshold: number = 2000;
  carbohydrateThreshold: number = 600;
  isAtRiskOfHeartAttack: boolean = false;
  fatThreshold: number = 70;

  constructor(
    private nutritionDataService: NutritionDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.formDataArray = this.nutritionDataService.formDataArray;
    this.calculateTotals();
    this.checkDiabetesRisk();
    this.checkHeartAttackRisk();
  }

  editNutrition(nutrition: any) {
    this.router.navigate(['/enter-nutrition'], { queryParams: { editId: nutrition.id }});
  }

  calculateTotals(): void {
    this.totalCalories = this.formDataArray.reduce((total, nutrition) => total + nutrition.calories, 0);
    this.totalCarbohydrates = this.formDataArray.reduce((total, nutrition) => total + nutrition.carbohydrates, 0);
    this.totalProtein = this.formDataArray.reduce((total, nutrition) => total + nutrition.protein, 0);
    this.totalFat = this.formDataArray.reduce((total, nutrition) => total + nutrition.fat, 0);
  }

  checkDiabetesRisk(): void {
    if (this.totalCalories > this.calorieThreshold || this.totalCarbohydrates > this.carbohydrateThreshold) {
      this.isAtRiskOfDiabetes = true;
    } else {
      this.isAtRiskOfDiabetes = false;
    }
  }

  checkHeartAttackRisk(): void {
    if (this.totalFat > this.fatThreshold) {
      this.isAtRiskOfHeartAttack = true;
    } else {
      this.isAtRiskOfHeartAttack = false;
    }
  }

  closeList() {
    this.router.navigate(['/']);
  }
}
