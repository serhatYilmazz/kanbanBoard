import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {Kanibo} from './kanibo.model';

import {getDateRange} from '../../../../util/date/date.util';
import {Portal, TemplatePortal} from '@angular/cdk/portal';
import {TimerService} from '../../../service/timer.service';

@Component({
  selector: 'app-kanibo',
  templateUrl: './kanibo.component.html',
  styleUrls: ['./kanibo.component.css']
})
export class KaniboComponent implements OnInit {
  @Input() kanibo: Kanibo;
  @Input() sectionKeyName: string;
  @Output() eventUp = new EventEmitter<PointerEvent>();

  showDescription = false;

  selectedPortal: Portal<any>;

  constructor(private viewContainerRef: ViewContainerRef,
              private timerService: TimerService) {

  }

  ngOnInit() {
    this.timerService.initializeTimer(this.kanibo);
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
    this.timerService.toggleTimer(this.kanibo);
  }

  completeKanibo() {
    // TODO
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
    return this.timerService.today();
  }

  getLast7Days() {
    return this.timerService.getLast7Days(this.kanibo);
  }
}
