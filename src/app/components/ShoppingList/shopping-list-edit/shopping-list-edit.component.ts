import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientModel } from 'src/app/models/IngredientModel';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private listService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(form: NgForm) {
    const ingredient = new IngredientModel(form.value.name, form.value.amount)
    this.listService.addIngredient(ingredient)
  }


}
