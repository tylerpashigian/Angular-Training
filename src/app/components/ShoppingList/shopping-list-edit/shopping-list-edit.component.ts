import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/models/IngredientModel';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private listService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const ingredient = new IngredientModel(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.listService.addIngredient(ingredient)
  }

}
