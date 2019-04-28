import {RouterModule, Routes} from '@angular/router';
import {KanbanComponent} from './kanban.component';
import {NgModule} from '@angular/core';
import {KanbanCreateEditComponent} from './kanban-area/kanban-create-edit/kanban-create-edit.component';
import {KanbanAreaComponent} from './kanban-area/kanban-area.component';

const kanbanRoutes: Routes = [
  {
    path: 'kanban', component: KanbanComponent, children: [
      {path: 'kanban-board', component: KanbanAreaComponent},
      {path: 'kanban-create', component: KanbanCreateEditComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(kanbanRoutes)
  ],
  exports: [RouterModule]
})
export class KanbanRoutingModule {

}
