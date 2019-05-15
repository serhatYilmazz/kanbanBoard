import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {Kanibo} from './kanibo.model';

import {getDateRange} from '../../../../util/date/date.util';
import {Portal, TemplatePortal} from '@angular/cdk/portal';

import * as KaniboAction from '../../../store/kanban.actions';
import * as fromApp from '../../../../store/app.reducers';
import {Store} from '@ngrx/store';

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

  saverTimer;

  constructor(private viewContainerRef: ViewContainerRef, private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.isTimerActive = !this.kanibo.isTimerActive;
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    clearInterval(this.saverTimer);
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
      this.timer = setInterval(() => {
        this.kanibo.spentTime++;
      }, 1000);
      this.isTimerActive = true;

      this.saverTimer = setInterval(() => {
        this.store.dispatch(new KaniboAction.SaveAKanibo(this.kanibo));
      }, 5000);
    } else {
      this.isTimerActive = false;
      clearInterval(this.timer);
      clearInterval(this.saverTimer);
    }


  }

  completeKanibo() {
    this.isTimerActive = false;
    clearInterval(this.timer);
    clearInterval(this.saverTimer);
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
      this.detach();
    }
  }
}
