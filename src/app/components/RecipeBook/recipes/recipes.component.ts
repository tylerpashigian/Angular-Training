import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/RecipeModel';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: RecipeModel) => {
      this.selectedRecipe = recipe;
    });
  }

}
