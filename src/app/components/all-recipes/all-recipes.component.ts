import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import Recipe from 'src/models/recipe';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
fillterdArray:Recipe[];
  arrAllRecipes: Recipe[];
  constructor(public recipeService: RecipeService, private router: Router) {

  }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(r => this.arrAllRecipes = r);
  }
  toRecipeDetails(id: number) {
    if (sessionStorage.getItem("login") === 'true')
      this.router.navigate(['/detail', id])
  }
}
