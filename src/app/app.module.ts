import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CastTimePipe } from './cast-time.pipe';
import { StarsPipe } from './stars.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { OneLayerComponent } from './components/one-layer/one-layer.component';
import { EditLayerComponent } from './edit-layer/edit-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    AllRecipesComponent,
    CastTimePipe,
    StarsPipe,
    SmallRecipeComponent,
    LoginComponent,
    RegisterComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeDetailsComponent,
    OneLayerComponent,
    EditLayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
