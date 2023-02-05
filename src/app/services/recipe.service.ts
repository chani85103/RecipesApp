import { Injectable } from '@angular/core';
import Recipe from 'src/models/recipe';
import Layer from 'src/models/layer';
import{HttpClient}from '@angular/common/http';
import {environment}from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http:HttpClient) { }
  routeUrl=`${environment.baseUrl}/recipe`;
  //arrRecipes:Recipe[]=[new Recipe(1,"hfghf",2,2,3,new Date(),[new Layer("fgf",["dfgfd"])],["gfgf"],2,"5.jpg",false)];
  // https://localhost:44336/api/recipe/GetAllRecipes	
  // GetRecipeById?id=1001	(int id)	https://localhost:44336/api/recipe/GetRecipeById	
  // GetRecipesByCategoryId?categoryId=1	(int categoryId)	https://localhost:44336/api/recipe/GetRecipesByCategoryId	
  // אובייקט Recipe יישלח בBody של הקריאה	(Recipe recipe)	https://localhost:44336/api/recipe/AddRecipe	
  // UpdateRecipe?recipeId=1001
  // וכן אובייקט עם השדות המעודכנים מסוג Recipe יישלח בBody של הקריאה 	(int recipeId ,Recipe recipe)	https://localhost:44336/api/recipe/UpdateRecipe	
  getAllRecipes(){
    return this.http.get<Recipe[]>(`${(this.routeUrl)}/GetAllRecipes`);
  }
  getRecipeById(id:number){
    return this.http.get<Recipe>(`${this.routeUrl}/GetRecipeById/${id}`);
  }
  getRecipesByCategoryId(category:number){
    return this.http.get<Recipe>(`${this.routeUrl}/GetRecipesByCategoryId/${category}`);
  }
  addRecipe(r:Recipe){
    return this.http.post<Recipe>(`${this.routeUrl}/AddRecipe`,r);
  }
  deleteRecipe(id:number){
    return this.http.delete<Recipe>(`${this.routeUrl}/ ${id}`);
  }
  putRecipe(r:Recipe){
    console.log(":hi");
    let recipeId:number=r.Id;
    return this.http.put<Recipe>(`${this.routeUrl}/UpdateRecipe/${r.Id}`,r);
  }
}
