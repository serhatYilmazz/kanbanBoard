import {Directive, ElementRef, EventEmitter, HostBinding, OnInit, Output, SkipSelf} from '@angular/core';
import {DroppableService} from '../droppable.service';
import {Kanibo} from '../../kanban/area/kanibo/kanibo.model';

@Directive({
  selector: '[appDropzone]',
  providers: [DroppableService]
})
export class DropzoneDirective implements OnInit {

  @HostBinding('class.dropzone-entered') entered = false;
  @HostBinding('class.dropzone-activated') activated = false;

  @Output() drop = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();

  private clientRect: ClientRect;

  constructor(private innerDroppableService: DroppableService,
              @SkipSelf() private  outerDroppableService: DroppableService,
              private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.outerDroppableService.dragStart$.subscribe(
      event => this.outerDragStart(event)
    );

    this.outerDroppableService.dragMove$.subscribe(
      event => this.outerDragMove(event)
    );

    this.outerDroppableService.dragEnd$.subscribe(
      event => this.outerDragEnd(event)
    );

    this.innerDroppableService.dragStart$.subscribe(
      () => this.innerDragStart()
    );

    this.innerDroppableService.dragEnd$.subscribe(
      () => this.innerDragEnd()
    );

  }

  private outerDragStart(event: PointerEvent) {
    this.clientRect = this.elementRef.nativeElement.getBoundingClientRect();
    this.activated = true;
  }

  private outerDragMove(event: PointerEvent) {
    if (!this.activated) {
      return;
    }
    if (this.dragInside(event)) {
      this.entered = true;
    } else {
      this.entered = false;
    }
  }

  private dragInside(event: PointerEvent) {
    return event.clientX <= this.clientRect.right &&
      event.clientX >= this.clientRect.left &&
      event.clientY <= this.clientRect.bottom &&
      event.clientY >= this.clientRect.top;
  }

  private outerDragEnd(event: PointerEvent) {
    if (!this.activated) {
      return;
    }
    if (this.entered) {
      this.drop.emit(this);
    }
    this.activated = false;
    this.entered = false;
  }

  private innerDragStart() {
    this.entered = true;
    this.activated = true;
  }

  private innerDragEnd() {
    if (!this.entered) {
      this.remove.emit();
    }
    this.entered = false;
    this.activated = false;
  }
}
