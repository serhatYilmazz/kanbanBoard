import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableDirective} from './draggable/draggable.directive';
import {DraggableObserverDirective} from './draggable/draggable-observer.directive';
import {DroppableService} from './droppable.service';
import {DroppableDirective} from './draggable/droppable.directive';
import {DropzoneDirective} from './draggable/dropzone.directive';
import {SortableDirective} from './sortable/sortable.directive';
import {SortableListDirective} from './sortable/sortable-list.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DraggableDirective,
    DraggableObserverDirective,
    DroppableDirective,
    DropzoneDirective,
    SortableDirective,
    SortableListDirective],
  exports: [DraggableDirective,
    DraggableObserverDirective,
    DroppableDirective,
    DropzoneDirective,
    SortableDirective,
    SortableListDirective],
  providers: [DroppableService]
})
export class SharedModule {

}
