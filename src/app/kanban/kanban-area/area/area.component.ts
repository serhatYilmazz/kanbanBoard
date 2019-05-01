import {Component, Input, OnInit, SkipSelf} from '@angular/core';
import {Kanibo} from './kanibo/kanibo.model';
import {Store} from '@ngrx/store';

import * as fromApp from '../../../store/app.reducers';
import * as KanbanActions from '../../store/kanban.actions';
import {SectionModel} from '../../section.model';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  @Input() section: SectionModel;
  @Input() sectionKeyName: string;

  constructor(private store: Store<fromApp.AppState>) { }

  notifyElementIsSelected(item: Kanibo) {
    this.store.dispatch(new KanbanActions.SelectKanibo(item));
  }

  ngOnInit() {
  }

}
