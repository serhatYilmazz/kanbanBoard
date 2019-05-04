import {SectionModel} from '../section.model';

import * as KanbanActions from './kanban.actions';
import {Kanibo} from '../kanban-area/area/kanibo/kanibo.model';

export interface State {
  section: {
    [key: string]: SectionModel
  };
  taskId: number;
  selectedKanibo: Kanibo;
}

const initialState: State = {
  section: {
    todo: {
      title: 'TODO',
      list: [
        new Kanibo('Sleep', 'Sleep in your Bed', 6, new Date(2018, 9, 13), null),
        new Kanibo('Eat', 'Eat in kitchen something to stay alive', 7, new Date(2018, 8, 13), null),
        new Kanibo('Relax', 'Relax your mind for a while', 8, new Date(2018, 5, 13), null)
      ],
      order: 1,
    },

    inProgress: {
      title: 'INPROGRESS',
      list: [
        new Kanibo('Angular Kanban Board', 'Develop a Kanban board to track over your multiple issues', 4, new Date(2018, 1, 13), null),
        new Kanibo('Java OCA', 'Oracle Certified Association Preperation', 5, new Date(2018, 3, 13), null)
      ],
      order: 2
    },

    done: {
      title: 'DONE',
      list: [
        new Kanibo('Graduate from University',
          'Graduate from the university to take a Bachelor\'s degree to get a job',
          6,
          new Date(2018, 2, 13), null),
      ],
      order: 3
    }
  },

  taskId: 9,
  selectedKanibo: null
};

export function kanbanReducer(state = initialState, action: KanbanActions.KanbanActions) {
  switch (action.type) {
    case KanbanActions.SELECT_KANIBO:
      return {
        ...state,
        selectedKanibo: action.payload
      };
    case KanbanActions.MOVE_TO:
      const movedItemSection: SectionModel = {...action.payload.sectionModel};
      movedItemSection.list.push(state.selectedKanibo);

      const newStateMoveTo = {
        ...state.section[action.payload.sectionName].list,
        list: movedItemSection
      };
      return {
        ...state
      };
    case KanbanActions.REMOVE_FROM:
      const removedItemSectionModel: SectionModel = {...action.payload.sectionModel};
      const indexOfItem = removedItemSectionModel.list.indexOf(state.selectedKanibo);
      removedItemSectionModel.list.splice(indexOfItem, 1);


      const newStateRemoveFrom = {
        ...state.section[action.payload.sectionName],
        removedItemSectionModel
      };
      return {
        ...state
      };
    case KanbanActions.ADD_KANIBO:
      const addTodo = {...state.section.todo};
      addTodo.list.push(action.payload);

      const newAddState = {
        ...state.section.todo.list,
        list: addTodo
      };
      let taskId = state.taskId;
      return {
        ...state,
        taskId: ++taskId
      };
    case KanbanActions.UPDATE_KANIBO:
      const updateOldKanibo = {
        ...action.payload.oldKanibo,
        title: action.payload.title,
        description: action.payload.description,
        updateDate: new Date()
      };

      const oldUpdateKaniboActionState = {...state};
      const oldKanibo = oldUpdateKaniboActionState.section[action.payload.sectionKeyName].list.indexOf(action.payload.oldKanibo);

      oldUpdateKaniboActionState.section[action.payload.sectionKeyName].list.splice(oldKanibo, 1, updateOldKanibo);

      return {
        ...state,
        ...oldUpdateKaniboActionState
      };
    case KanbanActions.SET_KANBAN_BOARD:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
