import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeModel } from 'src/app/models/RecipeModel';
import { DataStorageService } from '../data-storage/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<RecipeModel[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): RecipeModel[] | Observable<RecipeModel[]> | Promise<RecipeModel[]> {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length) {
      return recipes;
    } else {
      return this.dataStorageService.fetchRecipes();
    }
  }
}
