import {AfterContentInit, ContentChildren, Directive, EventEmitter, Output, QueryList} from '@angular/core';
import {SortableDirective} from './sortable.directive';


interface SortEvent {
  currentIndex: number;
  newIndex: number;
}

const distance = (rectA: ClientRect, rectB: ClientRect) => {
  return Math.sqrt(Math.pow(rectA.top - rectB.top, 2));
};

@Directive({
  selector: '[appSortableList]'
})
export class SortableListDirective implements AfterContentInit {

  @ContentChildren(SortableDirective) sortables: QueryList<SortableDirective>;

  @Output() sort = new EventEmitter<SortEvent>();

  private clientRects;

  ngAfterContentInit(): void {
    this.sortables.forEach(sortable => {
      sortable.onDragStartEvent.subscribe(() => this.measureClientRects());
      sortable.onDragMoveEvent.subscribe((event) => this.detectSorting(sortable, event));
    });
  }

  private measureClientRects() {

    this.clientRects = this.sortables.map(sortable => {
      sortable.elementRef.nativeElement.getBoundingClientRect();
    });
  }

  private detectSorting(sortable: SortableDirective, event: PointerEvent) {
    const currentIndex = this.sortables.toArray().indexOf(sortable);
    const currentRect: ClientRect = this.clientRects[currentIndex];
    this.clientRects
      .slice()
      .sort((rectA, rectB) => distance(rectA, currentRect) - distance(rectB, currentRect))
      .filter(rect => currentRect !== rect)
      .some((rect: ClientRect) => {
        const isBefore = rect.top < currentRect.top;

        let moveBack = false;
        let moveForward = false;

        moveBack = isBefore && event.clientY < rect.top + rect.height / 2;
        moveForward = isBefore && event.clientY > rect.top + rect.height / 2;

        if (moveBack || moveForward) {
          this.sort.emit({
            currentIndex: currentIndex,
            newIndex: this.clientRects.indexOf(rect)
          });

          return true;
        }

        return false;
      });
  }
}
