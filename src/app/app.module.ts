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
import { DropdownDirective } from './directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './components/RecipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/RecipeBook/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
