import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';
import {MealComponent} from './meal.component';
import {EditMealDetailsComponent} from './edit-meal-details.component';
import {NewMealComponent} from './new-meal.component';
import {HealthynessPipe} from './healthyness.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs:['onMealSelect'],
  directives:[MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [HealthynessPipe],
  template: `
  <div class= "row">
    <div class="col-md-6">
      <select (change)="onChange($event.target.value)">
        <option selected="selected" value="all">Show All</option>
        <option value="healthy">Show healthy meals</option>
        <option value="unhealthy">Show not so healthy meals</option>
      </select>
      <meal-display *ngFor="#currentMeal of mealList | healthyness:selectedHealthyness" (click)="mealClicked(currentMeal)"
      [meal] = "currentMeal"
      [class.healthy]="currentMeal.calories <= 500"
      [class.unhealthy]="currentMeal.calories >500">
      </meal-display>
    </div>
    <div class="col-md-6">
      <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal-details>
    </div>
  </div>
  <new-meal (onSubmitNewMeal)="createMeal($event)">
  </new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedHealthyness: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: string[]): void {
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], parseFloat(newMeal[2]))
    );
  }
  onChange(optionFromMenu){
    this.selectedHealthyness = optionFromMenu;
  }
}
