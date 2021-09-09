import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IngredientModel } from 'src/app/models/IngredientModel';
import { RecipeModel } from 'src/app/models/RecipeModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeList = [
    new RecipeModel(
      "Orange Chicken",
      "Copycat of Panda Express",
      "https://dinnerthendessert.com/wp-content/uploads/2017/08/Panda-Express-Orange-Chicken-8--768x1092.jpg",
      [
        new IngredientModel("Chicken Breasts", 2),
        new IngredientModel("Rice", 1)
      ]),
    new RecipeModel(
      "Avocado Chicken Rice Bowl",
      "Copycat of Panda Express",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190522-cilantro-lime-chicken-and-rice-bowl-portrait-046-pf-1-1559073830.jpg?resize=768:*",
      [
        new IngredientModel("Chicken Breast", 2),
        new IngredientModel("Avocado", 2)
      ])
  ];

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

}
