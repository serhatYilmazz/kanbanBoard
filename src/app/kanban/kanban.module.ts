import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {AreaComponent} from './area/area.component';
import {KaniboComponent} from './area/kanibo/kanibo.component';
import {KanbanComponent} from './kanban.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    KanbanComponent,
    AreaComponent,
    KaniboComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    KanbanComponent,
    AreaComponent,
    KaniboComponent
  ]
})
export class KanbanModule {

}
