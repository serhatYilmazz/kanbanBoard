import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as fromKanban from '../../kanban/store/kanban.reducer';
import * as KanbanActions from '../../kanban/store/kanban.actions';
import {Kanibo} from '../../kanban/kanban-area/area/kanibo/kanibo.model';
import {Router} from '@angular/router';

@Injectable()
export class CoreService {

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {

  }

  fetchData() {
    this.store.dispatch(new KanbanActions.FetchData());
  }

  saveData() {
    this.store.dispatch(new KanbanActions.SaveData());
  }

  filterByTaskId(taskId: number) {
    this.store.select('kanban').subscribe(
      (state: fromKanban.State) => {
        if (state.taskId >= taskId) {
          const sections = Object.keys(state.section);
          for (const section of sections) {
            state.section[section].list.forEach((kanibo: Kanibo) => {
              if (kanibo.taskId === taskId) {
                this.router.navigate(['/kanban', 'kanban-edit', section, taskId]);
                return;
              }
            });
          }
        }
      }
    );
  }
}
