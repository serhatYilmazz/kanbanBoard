import * as moment from 'moment';

export function getDateRange(date: Date) {
  return moment(date).startOf().fromNow();
}
