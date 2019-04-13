import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Kanibo} from './area/kanibo/kanibo.model';
import * as fromKanban from './store/kanban.reducer';
import {Section} from './section';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  sectionsName: string[];
  sections: fromKanban.State;
  taskId: number;

  constructor(private store: Store<fromKanban.State>) {
  }

  ngOnInit() {
    this.store.select('kanban').subscribe(
      (state: fromKanban.State) => {
        console.log(state);
        this.sections = state;
        this.sectionsName = Object.keys(state.section);
      }
    );
  }
}
