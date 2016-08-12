import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthyness",
  pure: false
})
export class HealthynessPipe implements PipeTransform {
  transform(input: Meal[], info){
    var desiredHealthyness = info[0];
    var output: Meal[] =[];
    if(desiredHealthyness === "healthy"){
      for (var i =0; i <input.length; i++){
        if (input[i].calories <= 500) {
          output.push(input[i]);
      }
    }
    return output;
  } else if (desiredHealthyness === "unhealthy"){
      for (var i =0; i <input.length; i++){
        if (input[i].calories > 500) {
        output.push(input[i]);
    }
  }
  return output;
  } else {
    return input;
    }
  }
}
