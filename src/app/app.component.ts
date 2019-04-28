import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {Store} from '@ngrx/store';

import * as fromApp from './store/app.reducers';
import * as KanbanActions from './kanban/store/kanban.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'DragAndDrop';

  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCYCZlH7NUjZOVZry7_tdDWlrM4Zj7DKw4',
      authDomain: 'kanban-85ffb.firebaseapp.com'
    });

    this.store.dispatch(new KanbanActions.FetchData());
  }
}
