import { Component, Input, OnInit } from '@angular/core';
import { IngredientModel } from 'src/app/models/IngredientModel';
import { RecipeModel } from 'src/app/models/RecipeModel';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: RecipeModel;

  constructor(private listService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredientsToList(ingredients: IngredientModel[]) {
    ingredients.forEach((ingredient) => {
      this.listService.addIngredient(ingredient);
    })
  }

}
