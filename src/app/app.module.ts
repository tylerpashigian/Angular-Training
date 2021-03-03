import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './components/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/RecipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/RecipeBook/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { RecipesComponent } from './components/RecipeBook/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
