import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IngredientModel } from 'src/app/models/IngredientModel';
import { RecipeModel } from 'src/app/models/RecipeModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeList: RecipeModel[] = [];

  recipesUpdated = new Subject<RecipeModel[]>();

  constructor() { }

  getRecipes() {
    return this.recipeList.slice();
  }

  getRecipe(index: number) {
    return this.recipeList[index];
  }
  addRecipe(recipe: RecipeModel): void {
    this.recipeList.push(recipe);
    this.recipesUpdated.next(this.recipeList.slice());
  }

  updateRecipe(index: number, recipe: RecipeModel): void {
    this.recipeList[index] = recipe;
    this.recipesUpdated.next(this.recipeList.slice());
  }

  deleteRecipe(index: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.recipeList.splice(index, 1);
      this.recipesUpdated.next(this.recipeList.slice());
      resolve();
    })
  }

  setRecipes(recipes: RecipeModel[]): void {
    this.recipeList = recipes;
    this.recipesUpdated.next(this.recipeList.slice());
  }

}
