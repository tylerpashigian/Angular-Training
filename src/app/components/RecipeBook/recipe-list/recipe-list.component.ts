import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {RecipeModel} from '../../../models/RecipeModel'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  selectedRecipe = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel("Orange Chicken", "Copycat of Panda Express", "https://dinnerthendessert.com/wp-content/uploads/2017/08/Panda-Express-Orange-Chicken-8--768x1092.jpg"),
    new RecipeModel("Avocado Chicken Rice Bowl", "Copycat of Panda Express", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190522-cilantro-lime-chicken-and-rice-bowl-portrait-046-pf-1-1559073830.jpg?resize=768:*")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipeDetail(recipe: RecipeModel) {
    this.selectedRecipe.emit(recipe);
  }

}
