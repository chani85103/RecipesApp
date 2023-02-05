import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import Category from 'src/models/category';
import Layer from 'src/models/layer';
import Recipe from 'src/models/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  constructor(public categoryService: CategoryService, public recipeService: RecipeService, private router: Router) {
    this.categoryService.getAllCategories().subscribe(c => {
      this.arrCategories = c;
    })
  }
  arrCategories: Category[] = [];
  recipe: Recipe = new Recipe(0, "", 0, 0, 0, new Date(), [], [], 0, "", false);
  components: string[] = [];
  component: string = "";
  description: string = "";
  preparationArr: string[] = [];
  preparation: string = "";

  ngOnInit(): void {
  }
  addComponent() {
    if (this.component != "") {
      this.components.push(this.component);
      this.component = "";
    }
  }
  addLayer() {
    console.log("layer")
    if (this.description != "" && this.components.length > 0) {
      this.recipe.Layers.push(new Layer(this.description, this.components))
      this.description = "";
      this.components = [];
    }
  }
  addPreparation() {
    if (this.preparation != "") {
      this.preparationArr.push(this.preparation);
      this.preparation = ""
    }
  }
  save() {
    // this.recipe.UserId = +sessionStorage.getItem("userId");
    // this.recipe.Preparation=this.preparationArr;
    // this.recipeService.addRecipe(this.recipe).subscribe(() => this.recipe = new Recipe(0, "", 0, 0, 0, new Date(), [], [], 0, "", false));
    alert("המתכון נוסף בהצלחה");
    // this.router.navigate(['/allRecipes']);
  }
}
