import {Component, Input, OnInit, SkipSelf} from '@angular/core';
import {SectionModel} from '../section.model';
import {Kanibo} from './kanibo/kanibo.model';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as KanbanActions from '../store/kanban.actions';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  @Input() section: SectionModel;

  constructor(private store: Store<fromApp.AppState>) { }

  notifyElementIsSelected(item: Kanibo) {
    this.store.dispatch(new KanbanActions.SelectKanibo(item));
  }

  ngOnInit() {
  }

}
