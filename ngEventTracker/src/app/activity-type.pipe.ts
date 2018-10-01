import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from './models/activity';

@Pipe({
  name: 'activityType'
})
export class ActivityTypePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(value: Activity[], bodyPart: string): any {
    const results = [];
      if (bodyPart === 'all') {
        return value;
      }
    // go through value list, add activity to results
    // if it has the same activityType

      // tslint:disable-next-line:no-shadowed-variable
      value.forEach(function(activity) {
          activity.types.forEach(function(typeObj) {
            if (typeObj.name === bodyPart) {
              results.push(activity);
            }
          });
  });
  return results;

  }
}
