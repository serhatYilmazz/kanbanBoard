import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'secondsToMinutes'
})
export class SecondsToMinutePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const minute = Math.floor(value / 60);
    const hour = Math.floor(value / 3600);

    const isHourExists = hour > 0;
    const isMinuteExists = value > 60;

    if (isNaN(value)) {
      return 0;
    }

    return (isHourExists ? `${hour}:` : ``) + (isMinuteExists ? `${minute % 60}:` : ``) + (value % 60);
  }
}
