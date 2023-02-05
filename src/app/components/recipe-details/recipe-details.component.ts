import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import Category from 'src/models/category';
import Recipe from 'src/models/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe = new Recipe(0, "", 0, 0, 0, new Date(), [], [], 0, "", false);
  category: Category = new Category(0, "", "");
  ofCurrentUser: boolean = false;
  constructor(public fromRoute: ActivatedRoute, public recipeService: RecipeService, public categoryService: CategoryService, private router: Router) {
    fromRoute.params.subscribe(i => {
      recipeService.getRecipeById(i.id).subscribe(r => {
        this.recipe = r,
          categoryService.getCategoryById(r.CategoryId).subscribe(c => this.category = c);
        this.ofCurrentUser = +sessionStorage.getItem("userId") == r.UserId;
        console.log(sessionStorage.getItem("userId"))
      });
    })
  }
  toEdit() {
    this.router.navigate(['edit', this.recipe.Id]);
  }

  ngOnInit(): void {
  }

}
