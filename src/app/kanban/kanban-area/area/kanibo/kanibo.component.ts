import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {Kanibo} from './kanibo.model';

import {getDateRange} from '../../../../util/date/date.util';
import {Portal, TemplatePortal} from '@angular/cdk/portal';
import * as moment from 'moment';

@Component({
  selector: 'app-kanibo',
  templateUrl: './kanibo.component.html',
  styleUrls: ['./kanibo.component.css']
})
export class KaniboComponent implements OnInit, OnDestroy {
  @Input() kanibo: Kanibo;
  @Input() sectionKeyName: string;
  @Output() eventUp = new EventEmitter<PointerEvent>();

  showDescription = false;

  selectedPortal: Portal<any>;

  isTimerActive = false;

  timer;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


  getLastedTime(date: Date) {
    return getDateRange(date);
  }

  eventEmit(event: PointerEvent) {
    this.eventUp.emit(event);
  }

  createPortal(templateRef: TemplateRef<any>) {
    this.selectedPortal = new TemplatePortal(templateRef, this.viewContainerRef);
  }

  startTimer() {
    if (!this.isTimerActive) {
      if (isNaN(this.kanibo.time.dailySpentTime[this.today()])) {
        this.kanibo.time.dailySpentTime[this.today()] = 0;
      }
      this.timer = setInterval(() => {
        this.kanibo.time.dailySpentTime[this.today()]++;
        this.kanibo.time.totalSpentTime++;
      }, 1000);
      this.isTimerActive = true;
    } else {
      this.isTimerActive = false;
      clearInterval(this.timer);
    }
  }

  completeKanibo() {
    this.isTimerActive = false;
    clearInterval(this.timer);
  }

  isAttached() {
    return this.selectedPortal && this.selectedPortal.isAttached;
  }

  detach() {
    this.selectedPortal.detach();
  }

  adjustShowDescriptions() {
    this.showDescription = !this.showDescription;
    if (this.selectedPortal && this.selectedPortal.isAttached) {
      this.selectedPortal.detach();
    }
  }

  today(): string {
    return moment().format('YYYY-MM-DD');
  }

  getLast7Days() {
    const days = Object.keys(this.kanibo.time.dailySpentTime);
    return days.reverse().slice(0, 7);
  }
}
