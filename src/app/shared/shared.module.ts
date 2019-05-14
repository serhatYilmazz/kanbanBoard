import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableDirective} from './draggable/draggable.directive';
import {DraggableObserverDirective} from './draggable/draggable-observer.directive';
import {DroppableService} from './droppable.service';
import {DroppableDirective} from './draggable/droppable.directive';
import {DropzoneDirective} from './draggable/dropzone.directive';
import {SecondsToMinutePipe} from './pipes/seconds-to-minutes/seconds-to-minute.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective, DraggableObserverDirective, DroppableDirective, DropzoneDirective, SecondsToMinutePipe],
  exports: [DraggableDirective, DraggableObserverDirective, DroppableDirective, DropzoneDirective, SecondsToMinutePipe],
  providers: [DroppableService]
})
export class SharedModule {

}
