import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

import { RecipeModel } from '../../../models/RecipeModel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnDestroy, OnInit {
  @Output()
  selectedRecipe = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[];
  recipesSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipesSubscription = this.recipeService.recipesUpdated.subscribe((recipes: RecipeModel[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }

  createNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  displayRecipeDetail(recipe: RecipeModel) {
    this.selectedRecipe.emit(recipe);
  }
}
