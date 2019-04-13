import {Action} from '@ngrx/store';
import {Kanibo} from '../area/kanibo/kanibo.model';

export class AddKanibo implements Action {
  type: string;

  constructor(kanibo: Kanibo) {

  }
}

export type KanbanActions = AddKanibo;
