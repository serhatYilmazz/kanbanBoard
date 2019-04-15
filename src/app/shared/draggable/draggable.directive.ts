import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  @HostBinding('class.dragging') dragging = false;

  constructor(public elementRef: ElementRef) {
  }

  @Output() onDragStartEvent = new EventEmitter<PointerEvent>();
  @Output() onDragMoveEvent = new EventEmitter<PointerEvent>();
  @Output() onDragEndEvent = new EventEmitter<PointerEvent>();

  isStart = false;

  @HostListener('pointerdown', ['$event'])
  onDragStart(event: PointerEvent) {
    this.isStart = true;
    this.dragging = true;
    this.onDragStartEvent.emit(event);
  }

  @HostListener('document:pointermove', ['$event'])
  onDragMove(event: PointerEvent) {
    if (!this.isStart) {
      return;
    }

    this.onDragMoveEvent.emit(event);
  }

  @HostListener('document:pointerup', ['$event'])
  onDragEnd(event: PointerEvent) {
    if (!this.isStart) {
      return;
    }
    this.isStart = false;
    this.dragging = false;
    this.onDragEndEvent.emit(event);
  }
}
