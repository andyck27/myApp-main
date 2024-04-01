import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NutritionDataService } from 'src/app/services/nutrition-data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-enter-nutrition',
  templateUrl: './enter-nutrition.component.html',
  styleUrls: ['./enter-nutrition.component.scss']
})

export class EnterNutritionComponent {
  formDataArray: any[] = [];
  foodType: string;
  quantity: number;
  calories: number;
  carbohydrates: number;
  protein: number;
  fat: number;
  date: Date;
  editMode: boolean = false;
  nutritionToEdit: any; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nutritionDataService: NutritionDataService
  ) { 
  }

  ngOnInit() {
    this.formDataArray = this.nutritionDataService.formDataArray;

    // Check if the component is in edit mode
    this.route.queryParams.subscribe(params => {
      if (params && params['editId']) {
        console.log(params['editId'])
        const editId = params['editId'];
        this.editMode = true;
        // Find the nutrition object to edit
        this.nutritionToEdit = this.formDataArray.find(nutrition => nutrition.id === editId);
        if (this.nutritionToEdit) {
          // Populate form fields with existing data
          this.foodType = this.nutritionToEdit.foodType;
          this.quantity = this.nutritionToEdit.quantity;
          this.calories = this.nutritionToEdit.calories;
          this.carbohydrates = this.nutritionToEdit.carbohydrates;
          this.protein = this.nutritionToEdit.protein;
          this.fat = this.nutritionToEdit.fat;
          this.date = this.nutritionToEdit.date;

        }
      }
    });
  }

  saveNutrition() {
    const uniqueId = uuidv4();
    const formData = {
      foodType: this.foodType,
      quantity: this.quantity,
      calories: this.calories,
      carbohydrates: this.carbohydrates,
      protein: this.protein,
      fat: this.fat,
      date: this.date,
      id: uniqueId,
    };

    if (this.editMode) {
      // Update existing nutrition object
      Object.assign(this.nutritionToEdit, formData);
    } else {
      // Push new nutrition object
      this.nutritionDataService.formDataArray.push(formData);
    }

    this.clearForm();
    this.router.navigate(['/']);
  }

  cancelNutrition() {
    this.clearForm();
    this.router.navigate(['/']);
  }

  clearForm() {
    this.foodType = '';
    this.quantity = null;
    this.calories = null;
    this.carbohydrates = null;
    this.protein = null;
    this.fat = null;
    this.date = null;
    this.editMode = false;
    this.nutritionToEdit = null;
  }
}
