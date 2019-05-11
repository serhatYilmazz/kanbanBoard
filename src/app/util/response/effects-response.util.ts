import * as fromKanban from '../../kanban/store/kanban.reducer';

export function initializeEmptyResponse(): fromKanban.State {
  const response = {
    section: {
      todo: {
        title: 'TODO',
        list: [],
        order: 1,
      },

      inProgress: {
        title: 'INPROGRESS',
        list: [],
        order: 2
      },

      done: {
        title: 'DONE',
        list: [],
        order: 3
      }
    },
    taskId: 0,
    selectedKanibo: null
  };

  return response;
}
