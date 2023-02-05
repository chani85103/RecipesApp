import { Component, Input, OnInit } from '@angular/core';
import Recipe from 'src/models/recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
  @Input()
  myRecipe:Recipe
  constructor() { }

  ngOnInit(): void {
  }

}
