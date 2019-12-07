import {RouterModule, Routes} from '@angular/router';
import {KanbanComponent} from './kanban/kanban.component';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
  {path: '', redirectTo: '/kanban/kanban-board', pathMatch: 'full'},
  {path: 'kanban', component: KanbanComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
