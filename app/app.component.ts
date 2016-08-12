import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model'
import {MealListComponent} from './meal-list.component'

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template:`
    <div class="container">
      <h1>List of Meals</h1>
      <meal-list [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
    new Meal("Coxinha", "without cheese", 450),
  ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
