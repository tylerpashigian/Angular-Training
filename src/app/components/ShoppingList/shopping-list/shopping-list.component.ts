import { Component, OnInit } from '@angular/core';

import { IngredientModel } from 'src/app/models/IngredientModel';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[];

  constructor(private listService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.listService.getIngredients();
    this.listService.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

}
