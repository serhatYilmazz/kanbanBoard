import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';

import * as KanbanActions from './kanban.actions';
import * as fromKanban from '../store/kanban.reducer';
import {environment} from '../../../environments/environment';
import * as EffectResponseUtil from '../../util/response/effects-response.util';
import {of} from 'rxjs';

@Injectable()
export class KanbanEffects {

  dbUrl: string;

  @Effect()
  fetchData = this.actions$.pipe(
    ofType(KanbanActions.ON_FETCH_DATA),
    switchMap((kanbanAction: KanbanActions.FetchData) => {
      return this.httpClient.get<fromKanban.State>(this.dbUrl, {
        observe: 'body',
        responseType: 'json'
      });
    }),
    map((response) => {
      if (!response) {
        response = EffectResponseUtil.initializeEmptyResponse();
      }
      if (response.section) {
        const keys = Object.keys(response.section);
        for (const key of keys) {
          if (!response.section[key].list) {
            response.section[key].list = [];
          }
        }
      }
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
      return this.httpClient.put(this.dbUrl, state, {reportProgress: true});
    }),
    catchError((error) => {
      return of(error);
    })
  );

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromKanban.State>) {
    this.dbUrl = environment.dbUrl;
  }
}
