import { Component, OnInit } from '@angular/core';

import {RecipeModel} from '../../../models/RecipeModel'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel("Orange Chicken", "Copycat of Panda Express", "https://dinnerthendessert.com/wp-content/uploads/2017/08/Panda-Express-Orange-Chicken-8--768x1092.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
