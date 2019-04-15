import {Kanibo} from '../area/kanibo/kanibo.model';
import * as KanbanActions from './kanban.actions';
import {Section} from '../section';

export interface State {
  section: {
    [key: string]: Section
  };
  taskId;
}

const initialState: State = {
  section: {
    todo: {
        title: 'TODO',
        list: [
          new Kanibo('Sleep', 'Sleep in your Bed', 6),
          new Kanibo('Eat', 'Eat in kitchen something to stay alive', 7),
          new Kanibo('Relax', 'Relax your mind for a while', 8)
        ],
        order: 1,
    },

    inProgress: {
      title: 'INPROGRESS',
      list: [
        new Kanibo('Angular Kanban Board', 'Develop a Kanban board to track over your multiple issues', 4),
        new Kanibo('Java OCA', 'Oracle Certified Association Preperation', 5)
      ],
      order: 2
    },

    done: {
      title: 'DONE',
      list: [
        new Kanibo('Graduate from University', 'Graduate from the university to take a Bachelor\'s degree to get a job', 6),
      ],
      order: 3
    }
  },

  taskId: 9
};

export function kanbanReducer(state = initialState, action: KanbanActions.KanbanActions) {
  return state;
}
