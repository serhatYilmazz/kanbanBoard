import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableDirective} from './draggable/draggable.directive';
import {DraggableObserverDirective} from './draggable/draggable-observer.directive';
import {DroppableService} from './draggable/droppable.service';
import {DroppableDirective} from './draggable/droppable.directive';
import {DropzoneDirective} from './draggable/dropzone.directive';
import {SecondsToMinutePipe} from './pipes/seconds-to-minutes/seconds-to-minute.pipe';
import {DropdownDirective} from './dropdown/dropdown.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DraggableDirective,
    DraggableObserverDirective,
    DroppableDirective,
    DropzoneDirective,
    SecondsToMinutePipe,
    DropdownDirective
  ],
  exports: [
    DraggableDirective,
    DraggableObserverDirective,
    DroppableDirective,
    DropzoneDirective,
    SecondsToMinutePipe,
    DropdownDirective
  ],
  providers: [DroppableService]
})
export class SharedModule {

}
