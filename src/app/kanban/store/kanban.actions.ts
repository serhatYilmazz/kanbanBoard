import {Action} from '@ngrx/store';
import {SectionModel} from '../section.model';
import {Kanibo} from '../kanban-area/area/kanibo/kanibo.model';

export const MOVE_TO = 'MOVE_TO';
export const REMOVE_FROM = 'REMOVE_FROM';
export const SELECT_KANIBO = 'SELECT_KANIBO';
export const ADD_KANIBO = 'ADD_KANIBO';

export class SelectKanibo implements Action {
  readonly type = SELECT_KANIBO;

  constructor(public payload: Kanibo) {}
}

export class MoveTo implements Action {
  readonly type = MOVE_TO;

  constructor(public payload: {sectionModel: SectionModel, sectionName: string}) {}
}

export class RemoveFrom implements Action {
  readonly type = REMOVE_FROM;

  constructor(public payload: {sectionModel: SectionModel, sectionName: string}) {}
}

export class AddKanibo implements Action {
  readonly type = ADD_KANIBO;

  constructor(public payload: Kanibo) {

  }
}

export type KanbanActions = SelectKanibo | MoveTo | RemoveFrom | AddKanibo;

