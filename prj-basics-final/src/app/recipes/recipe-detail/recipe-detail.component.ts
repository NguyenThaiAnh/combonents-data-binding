import { Component, Input, OnInit } from '@angular/core';

import { Recipe }                   from '../recipe.model';
import { RecipesService }           from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
  }

  /*Bắt sự kiện nhất nut Go to shopping list add mảng ingredients vào
  * Mảng này được lấy từ recipe.ingredients ở trên*/
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
