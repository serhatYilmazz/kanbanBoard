import {Injectable} from '@angular/core';
import {Kanibo} from '../kanban-area/area/kanibo/kanibo.model';
import {Store} from '@ngrx/store';

import * as moment from 'moment';
import * as fromApp from '../../store/app.reducers';
import * as KanbanActions from '../store/kanban.actions';

@Injectable()
export class TimerService {

  timerList: { kaniboId: number, timer: number }[] = [];

  constructor(private store: Store<fromApp.AppState>) {

  }

  startTimer(kanibo: Kanibo) {
    const timer = setInterval(() => {
      kanibo.time.dailySpentTime[this.today()]++;
      kanibo.time.totalSpentTime++;
    }, 1000);
    this.timerList.push({kaniboId: kanibo.taskId, timer});
    kanibo.isTimerActive = true;
  }

  pauseTimer(kanibo: Kanibo) {
    const theTimer = this.timerList.find(theKanibo => theKanibo.kaniboId === kanibo.taskId);
    clearInterval(theTimer.timer);
    const indexOfKanibo = this.timerList.indexOf(this.getKaniboTimerById(kanibo.taskId));
    this.timerList.splice(indexOfKanibo, 1);
    kanibo.isTimerActive = false;
  }

  today(): string {
    return moment().format('YYYY-MM-DD');
  }

  initializeTimer(kanibo: Kanibo) {
    if (isNaN(kanibo.time.dailySpentTime[this.today()])) {
      kanibo.time.dailySpentTime[this.today()] = 0;
    }
    if (kanibo.isTimerActive && !this.isTimerAlreadyActive(kanibo)) {
      this.startTimer(kanibo);
    }
  }

  toggleTimer(kanibo: Kanibo) {
    if (kanibo.isTimerActive) {
      this.pauseTimer(kanibo);
    } else if (!kanibo.isTimerActive) {
      this.startTimer(kanibo);
    }
    this.store.dispatch(new KanbanActions.SaveData());
  }

  isTimerAlreadyActive(kanibo: Kanibo): boolean {
    return this.getKaniboTimerById(kanibo.taskId) !== undefined;
  }

  getKaniboTimerById(kaniboId) {
    return this.timerList.find(theKanibo => theKanibo.kaniboId === kaniboId);
  }

  getLast7Days(kanibo: Kanibo) {
    const days = Object.keys(kanibo.time.dailySpentTime);
    return days.reverse().slice(0, 7);
  }

  endTimer(kanibo: Kanibo, sectionKeyName) {
    if (this.isTimerAlreadyActive(kanibo) && sectionKeyName.payload.sectionName !== 'inProgress') {
      this.pauseTimer(kanibo);
    }
  }
}
