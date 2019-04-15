import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableDirective} from './draggable/draggable.directive';
import {DraggableObserverDirective} from './draggable/draggable-observer.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective, DraggableObserverDirective],
  exports: [DraggableDirective, DraggableObserverDirective]
})
export class SharedModule {

}
