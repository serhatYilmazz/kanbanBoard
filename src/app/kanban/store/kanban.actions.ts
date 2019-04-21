import {Action} from '@ngrx/store';
import {Kanibo} from '../area/kanibo/kanibo.model';
import {SectionModel} from '../section.model';

export const MOVE_TO = 'MOVE_TO';
export const REMOVE_FROM = 'REMOVE_FROM';
export const SELECT_KANIBO = 'SELECT_KANIBO';

export class SelectKanibo implements Action {
  readonly type: string = SELECT_KANIBO;

  constructor(public payload: Kanibo) {}
}

export class MoveTo implements Action {
  readonly type: string = MOVE_TO;

  constructor(public payload: {sectionModel: SectionModel, sectionName: string}) {}
}

export class RemoveFrom implements Action {
  readonly type: string = REMOVE_FROM;

  constructor(public payload: {sectionModel: SectionModel, sectionName: string}) {}
}

export type KanbanActions = SelectKanibo | MoveTo | RemoveFrom;

