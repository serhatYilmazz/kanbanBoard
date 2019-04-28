import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SectionModel} from '../section.model';
import {Store} from '@ngrx/store';

import * as KanbanActions from './kanban.actions';
import * as fromApp from '../../store/app.reducers';

@Injectable()
export class KanbanEffects {

  @Effect()
  fetchData = this.actions$.pipe(
    ofType(KanbanActions.ON_FETCH_DATA),
    switchMap((kanbanAction: KanbanActions.FetchData) => {
      return this.httpClient.get<SectionModel>('https://kanban-85ffb.firebaseio.com/kanban.json', {
        observe: 'body',
        responseType: 'json'
      });
    }),
    map(response => {
      return {
        type: KanbanActions.SET_KANBAN_BOARD,
        payload: response
      };
    })
  );

  @Effect({dispatch: false})
  onSaveData = this.actions$.pipe(
    ofType(KanbanActions.ON_SAVE_DATA),
    withLatestFrom((this.store.select('kanban'))),
    switchMap(([action, state]) => {
      return this.httpClient.put('https://kanban-85ffb.firebaseio.com/kanban.json', state);
    })
  );

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromApp.AppState>) {
  }
}
