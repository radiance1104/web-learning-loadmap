import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToString'
})
export class DateToStringPipe implements PipeTransform {

  transform(date: Date): string {
    const now = new Date();
    const timeOfNow = now.getTime();
    const timeOfTarget = date.getTime();
    if (timeOfNow - timeOfTarget < 10 * 60 * 1000) {
      return 'Just now.';
    } else if (timeOfNow - timeOfTarget < 60 * 60 * 1000) {
      return `Before ${Math.floor((timeOfNow - timeOfTarget) / (60 * 1000))} minutes`;
    } else if (timeOfNow - timeOfTarget < 24 * 60 * 60 * 1000) {
      return `Before ${Math.floor((timeOfNow - timeOfTarget) / (60 * 60 * 1000))} hours`;
    }
    return `Before ${Math.floor((timeOfNow - timeOfTarget) / (24 * 60 * 60 * 1000))} days`;
  }
}
