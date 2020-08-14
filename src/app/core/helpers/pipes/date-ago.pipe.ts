import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let transformedDateString = 'Just now';
      const nowDate: any = new Date();
      const transformDate = Date.parse(value);
      const seconds = Math.floor((nowDate - transformDate) / 1000);

      if (seconds < 29) {
        return transformedDateString;
      }
      const intervals = {
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      
      for (const i in intervals) {
        const counter = Math.floor(seconds / intervals[i]);

        if (counter > 0) {
          if (counter === 1) {
            transformedDateString = `${counter} ${i} ago`; // singular (1 day ago)
          } else {
            transformedDateString = `${counter} ${i}s ago`; // plural (2 days ago)
          }
        }
        return transformedDateString;
      }
    }
  }

}