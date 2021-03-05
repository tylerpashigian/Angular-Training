import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

import {RecipeModel} from '../../../models/RecipeModel'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  selectedRecipe = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  displayRecipeDetail(recipe: RecipeModel) {
    this.selectedRecipe.emit(recipe);
  }

}
