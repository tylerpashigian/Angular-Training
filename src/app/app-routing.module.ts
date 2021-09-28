import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './components/RecipeBook/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/RecipeBook/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/RecipeBook/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/RecipeBook/recipes/recipes.component';
import { ShoppingListComponent } from './components/ShoppingList/shopping-list/shopping-list.component';
import { RecipeResolverService } from './services/recipe/recipe-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
  { path: 'shoppingList', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
