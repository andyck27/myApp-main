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

  constructor(
    private nutritionDataService: NutritionDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.formDataArray = this.nutritionDataService.formDataArray;
  }

  editNutrition(nutrition: any) {
    this.router.navigate(['/enter-nutrition'], { queryParams: { editId: nutrition.id }});
  }

  closeList() {
    this.router.navigate(['/']);
  }
}
