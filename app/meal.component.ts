import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector:'meal-display',
    inputs: ['meal'],
    template:`
    <h1>{{ meal.name }}</h1>
    <ul>
      <li> Details: {{meal.description}} </li>
      <li> Calorie Count: {{meal.calories}} </li>
    </ul>
    `
})
export class MealComponent{
  public meal: Meal;
}
