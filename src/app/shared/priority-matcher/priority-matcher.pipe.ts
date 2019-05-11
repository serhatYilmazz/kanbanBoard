import {Pipe, PipeTransform} from '@angular/core';
import {ReversePriority} from '../../enums/enums';

@Pipe({
  name: 'priorityMathcer'
})
export class PriorityMatcherPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return ReversePriority[value];
  }
}
