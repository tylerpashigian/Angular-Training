import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/RecipeModel';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  selectRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
