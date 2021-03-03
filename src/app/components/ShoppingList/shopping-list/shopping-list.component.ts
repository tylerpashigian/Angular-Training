import { Component, OnInit } from '@angular/core';

import { IngredientModel } from 'src/app/models/IngredientModel';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel("Chicken", 10),
    new IngredientModel("Orange", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
