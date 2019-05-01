import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as KanbanActions from '../../kanban/store/kanban.actions';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onFetchData() {
    this.store.dispatch(new KanbanActions.FetchData());
  }

  onSaveData() {
    this.store.dispatch(new KanbanActions.SaveData());
  }

  getSaveCondition(): string {
    if (!environment.production) {
      return 'none';
    }
    return 'auto';
  }

}
