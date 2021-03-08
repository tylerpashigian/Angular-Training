import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  createNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  displayRecipeDetail(recipe: RecipeModel) {
    this.selectedRecipe.emit(recipe);
  }

}
