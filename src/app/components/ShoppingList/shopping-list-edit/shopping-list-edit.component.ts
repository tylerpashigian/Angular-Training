import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/models/IngredientModel';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  @Output()
  ingredientEmitter = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    console.log(`Name: ${this.nameInput.nativeElement.value}`);
    console.log(`Amount: ${this.amountInput.nativeElement.value}`);
    const ingredient = new IngredientModel(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.ingredientEmitter.emit(ingredient);
  }

}
