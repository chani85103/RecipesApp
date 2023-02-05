import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';
import Category from 'src/models/category';
import Layer from 'src/models/layer';
import Recipe from 'src/models/recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  constructor(public fromRoute: ActivatedRoute, public recipeService: RecipeService, public categoryService: CategoryService,private router:Router) {
    fromRoute.params.subscribe(i => {
      recipeService.getRecipeById(i.id).subscribe(r => {
        this.recipe = r,
          categoryService.getCategoryById(r.CategoryId).subscribe(c => this.category = c);
          this.preparationArr=r.Preparation;
      });
    })
  }
  recipe: Recipe = new Recipe(0, "", 0, 0, 0, new Date(), [], [], 0, "", false);
  category: Category = new Category(0, "", "");
  arrCategories: Category[] = [];
  baseRecipe: Recipe = new Recipe(0, "", 0, 0, 0, new Date(), [], [], 0, "", false);
  components: string[]=[];
  component: string = "";
  description: string = "";
  preparationArr: string[]=[];
  preparation: string = "";
  addComponent() {
    if (this.component != "") {
      this.components.push(this.component);
      this.component = "";
    }
  }
  addLayer() {
    if (this.description != "" && this.components.length>0 ) {
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
  cancel()
  {
    this.recipe=this.baseRecipe;
  }
  save() {
    this.recipe.UserId=+sessionStorage.getItem("userId");
    this.recipe.Preparation=this.preparationArr;
    this.recipeService.putRecipe(this.recipe).subscribe((r) => {console.log(r)
      this.recipe = new Recipe(0, "", 0, 0, 0, new Date(), [], [], 0, "", false)
    console.log("put")});
    this.router.navigate(['allRecipes']);
  }
  ngOnInit(): void {
    this.baseRecipe=this.recipe;
  }

}
