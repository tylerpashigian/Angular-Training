import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { RecipeModel } from 'src/app/models/RecipeModel';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  FIREBASE_URL = 'https://angular-training-8fbe0-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  fetchRecipes() {
    return this.http
      .get<RecipeModel[]>(`${this.FIREBASE_URL}recipes.json`)
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${this.FIREBASE_URL}recipes.json`, recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
