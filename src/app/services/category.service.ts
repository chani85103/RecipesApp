import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import {environment}from 'src/environments/environment';
import Category from 'src/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }
  routeUrl=`${environment.baseUrl}/category`;
  getAllCategories(){
    return this.http.get<Category[]>(`${(this.routeUrl)}/GetAllCategories`);
  }
  getCategoryById(id:number){
    return this.http.get<Category>(`${this.routeUrl}/GetCategoryById/${id}`);
  }
}

