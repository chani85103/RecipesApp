import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'allRecipes', component: AllRecipesComponent },
  { path: 'detail/:id', component: RecipeDetailsComponent },
  { path: 'edit/:id', component: EditRecipeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addRecipe', component: AddRecipeComponent },
  { path: '*', component: AllRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
