import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IngredientModel } from 'src/app/models/IngredientModel';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<IngredientModel[]>();
  startedEditing = new Subject<number>()

  private ingredients: IngredientModel[] = [
    new IngredientModel("Chicken", 10),
    new IngredientModel("Orange", 1)
  ];

  constructor() { }

  getIngredient(index: number): IngredientModel {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredient(index: number, ingredient: IngredientModel) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
