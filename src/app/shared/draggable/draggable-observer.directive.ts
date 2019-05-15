import {Directive, HostBinding, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {GlobalPositionStrategy, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {DraggableDirective} from './draggable.directive';
import {TemplatePortal} from '@angular/cdk/portal';

@Directive({
  selector: '[appDraggableObserver]',
  exportAs: 'appDraggableObserver'
})
export class DraggableObserverDirective implements OnInit, OnDestroy {

  @HostBinding('class.observer-drag') observerDrag = true;

  private positionStrategy = new GlobalPositionStrategy();

  private overlayRef: OverlayRef;

  private startPosition: { x: number, y: number};

  constructor(private overlay: Overlay,
              private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private draggable: DraggableDirective) {
  }

  ngOnInit(): void {
    this.draggable.onDragStartEvent.subscribe(
      event => {
        this.onDragStart(event);
      }
    );

    this.draggable.onDragMoveEvent.subscribe(
      event => {
        this.onDragMove(event);
      }
    );

    this.draggable.onDragEndEvent.subscribe(
      event => {
        this.onDragEnd(event);
      }
    );

    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionStrategy
    });
  }

  private onDragStart(event: PointerEvent) {
    const clientRect = this.draggable.elementRef.nativeElement.getBoundingClientRect();

    this.startPosition = {
      x: event.clientX - clientRect.left,
      y: event.clientY - clientRect.top
    };
  }

  private onDragMove(event: PointerEvent) {
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(new TemplatePortal(this.templateRef, this.viewContainerRef));
    }

    this.positionStrategy.left(`${event.clientX - this.startPosition.x}px`);
    this.positionStrategy.top(`${event.clientY - this.startPosition.y}px`);

    this.positionStrategy.apply();
  }

  private onDragEnd(event: PointerEvent) {
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    this.overlayRef.dispose();
  }


}
