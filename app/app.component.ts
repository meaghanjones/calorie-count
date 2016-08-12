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
    new Meal("Tomato Soup", "Low Salt content", 200),
    new Meal("Mac and Cheese", "from the box", 1000),
    new Meal("Edamame Salad", "no salad dressing", 150)
  ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
