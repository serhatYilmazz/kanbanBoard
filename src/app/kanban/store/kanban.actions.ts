import {Action} from '@ngrx/store';
import {SectionModel} from '../section.model';
import {Kanibo} from '../kanban-area/area/kanibo/kanibo.model';

export const MOVE_TO = 'MOVE_TO';
export const REMOVE_FROM = 'REMOVE_FROM';
export const SELECT_KANIBO = 'SELECT_KANIBO';
export const ADD_KANIBO = 'ADD_KANIBO';
export const UPDATE_KANIBO = 'UPDATE_KANIBO';
export const ON_FETCH_DATA = 'ON_FETCH_DATA';
export const SET_KANBAN_BOARD = 'SET_KANBAN_BOARD';
export const ON_SAVE_DATA = 'ON_SAVE_DATA';
export const ON_SAVE_A_KANIBO = 'ON_SAVE_A_KANIBO';

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

export class UpdateKanibo implements Action {
  readonly type = UPDATE_KANIBO;

  constructor(public payload: {oldKanibo: Kanibo, title: string, description: string, priotrize, sectionKeyName: string}) {

  }
}

export class FetchData implements Action {
  readonly type = ON_FETCH_DATA;
}

export class SetKanbanBoard implements Action {
  readonly type = 'SET_KANBAN_BOARD';

  constructor(public payload: SectionModel) {
  }
}

export class SaveData implements Action {
  readonly type = ON_SAVE_DATA;
}

export type KanbanActions =
  SelectKanibo |
  MoveTo |
  RemoveFrom |
  AddKanibo |
  FetchData |
  SetKanbanBoard |
  SaveData |
  UpdateKanibo;

