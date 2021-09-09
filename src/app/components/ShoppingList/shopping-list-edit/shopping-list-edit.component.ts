import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IngredientModel } from 'src/app/models/IngredientModel';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnDestroy, OnInit {
  editedIndex: number;
  editedItem: IngredientModel;
  editMode = false;
  editingSubscription: Subscription;

  @ViewChild('f', { static: false }) form: NgForm;

  constructor(private listService: ShoppingListService) {}

  ngOnInit(): void {
    this.editingSubscription = this.listService.startedEditing.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedItem = this.listService.getIngredient(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const ingredient = new IngredientModel(form.value.name, form.value.amount);
    if (this.editMode) {
      this.listService.updateIngredient(this.editedIndex, ingredient);
    } else {
      this.listService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(): void {
    this.form.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.listService.deleteIngredient(this.editedIndex);
    this.onClear();
  }

}
