import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as KanbanActions from '../store/kanban.actions';

@Component({
  selector: 'app-kanban-area',
  templateUrl: './kanban-area.component.html',
  styleUrls: ['./kanban-area.component.css']
})
export class KanbanAreaComponent implements OnInit {

  sectionsName: string[];
  sections;
  taskId: number;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('kanban').subscribe(
      (state) => {
        console.log(state);
        this.sections = state;
        this.sectionsName = Object.keys(state.section);
      }
    );
  }

  move(section, sectionName) {
    this.store.dispatch(new KanbanActions.MoveTo({sectionModel: section, sectionName}));
  }

  remove(section, sectionName) {
    this.store.dispatch(new KanbanActions.RemoveFrom({sectionModel: section, sectionName}));
  }
}
