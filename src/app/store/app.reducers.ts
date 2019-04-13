import * as fromKanban from '../kanban/store/kanban.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  kanban: fromKanban.State;
}

export const reducers: ActionReducerMap<AppState> = {
  kanban: fromKanban.kanbanReducer
}
