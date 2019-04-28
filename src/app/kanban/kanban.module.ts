import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {KanbanComponent} from './kanban.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {KanbanRoutingModule} from './kanban-routing.module';
import { KanbanAreaComponent } from './kanban-area/kanban-area.component';
import {AreaComponent} from './kanban-area/area/area.component';
import {KaniboComponent} from './kanban-area/area/kanibo/kanibo.component';
import {KanbanCreateEditComponent} from './kanban-area/kanban-create-edit/kanban-create-edit.component';

@NgModule({
  declarations: [
    KanbanComponent,
    AreaComponent,
    KaniboComponent,
    KanbanCreateEditComponent,
    KanbanAreaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    KanbanRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class KanbanModule {

}
