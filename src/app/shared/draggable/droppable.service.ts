import {Injectable, Optional, SkipSelf} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Kanibo} from '../../kanban/kanban-area/area/kanibo/kanibo.model';

@Injectable()
export class DroppableService {

  dragStart$: Observable<PointerEvent>;
  dragMove$: Observable<PointerEvent>;
  dragEnd$: Observable<PointerEvent>;

  private dragStartSubject = new Subject<PointerEvent>();
  private dragMoveSubject = new Subject<PointerEvent>();
  private dragEndSubject = new Subject<PointerEvent>();

  private selectedKanibo: Kanibo;

  constructor(@SkipSelf() @Optional() private parent?: DroppableService) {
    this.dragStart$ = this.dragStartSubject.asObservable();
    this.dragMove$ = this.dragMoveSubject.asObservable();
    this.dragEnd$ = this.dragEndSubject.asObservable();
  }

  onDragStart(event: PointerEvent) {
    this.dragStartSubject.next(event);
    if (this.parent) {
      this.parent.onDragStart(event);
    }
  }

  onDragMove(event: PointerEvent) {
    this.dragMoveSubject.next(event);
    if (this.parent) {
      this.parent.onDragMove(event);
    }
  }

  onDragEnd(event: PointerEvent) {
    this.dragEndSubject.next(event);
    if (this.parent) {
      this.parent.onDragEnd(event);
    }
  }
}
