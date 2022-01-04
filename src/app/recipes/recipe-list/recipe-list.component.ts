import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A simple recipe',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodista.com%2Fsites%2Fdefault%2Ffiles%2FShakshuka-Recipe-with-Red-Enchilada-Sauce-1.jpg&f=1&nofb=1'
    ),
    new Recipe(
      'Another Test Recipe',
      'A simple recipe',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodista.com%2Fsites%2Fdefault%2Ffiles%2FShakshuka-Recipe-with-Red-Enchilada-Sauce-1.jpg&f=1&nofb=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
