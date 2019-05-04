import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import * as fromKanban from './kanban.reducer';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


/**
 * Can be thought as a future clean solution of initializing data for app.
 */
@Injectable()
export class KanbanResolver implements Resolve<fromKanban.State> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<fromKanban.State> |
    Promise<fromKanban.State> | fromKanban.State {
    return this.httpClient.get<fromKanban.State>('https://kanban-85ffb.firebaseio.com/kanban.json', {
            observe: 'body',
            responseType: 'json'
          });
  }

  constructor(private httpClient: HttpClient) {

  }
}
