import {Priotrize} from '../../kanban/kanban-area/area/kanibo/kanibo.model';

export function kanban_13_corrections(response) {
  const keys = Object.keys(response.section);
  for (const key of keys) {
    for (const item of response.section[key].list) {
      if (!item.spentTime) {
        item.spentTime = 0;
      }
    }
  }
  return response;
}

export function kanban_27_corrections(response) {
  const keys = Object.keys(response.section);
  for (const key of keys) {
    for (const item of response.section[key].list) {
      if (!item.isTimerActive) {
        item.isTimerActive = false;
      }
    }
  }
  return response;
}

export function kanban_12_corrections(response) {
  const keys = Object.keys(response.section);
  for (const key of keys) {
    for (const item of response.section[key].list) {
      if (!item.priotrize) {
        item.priotrize = new Priotrize(1, 1, 1, 1);
      }
    }
  }
  return response;
}
