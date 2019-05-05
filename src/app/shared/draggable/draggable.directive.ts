import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDraggable],[appDroppable]'
})
export class DraggableDirective {

  @HostBinding('class.dragging') dragging = false;

  constructor(public elementRef: ElementRef) {
  }

  @Output() onDragStartEvent = new EventEmitter<PointerEvent>();
  @Output() onDragMoveEvent = new EventEmitter<PointerEvent>();
  @Output() onDragEndEvent = new EventEmitter<PointerEvent>();

  @HostListener('eventUp', ['$event'])
  onDragStart(event: PointerEvent) {
    this.dragging = true;
    this.onDragStartEvent.emit(event);
  }

  @HostListener('document:pointermove', ['$event'])
  onDragMove(event: PointerEvent) {
    if (!this.dragging) {
      return;
    }

    this.onDragMoveEvent.emit(event);
  }

  @HostListener('document:pointerup', ['$event'])
  onDragEnd(event: PointerEvent) {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    this.onDragEndEvent.emit(event);
  }
}
