export class Kanibo {
  constructor(public title: string,
              public description: string,
              public taskId: number,
              public creationDate: Date,
              public updateDate: Date,
              public priotrize: Priotrize,
              public spentTime,
              public isTimerActive ) {
  }
}

export class Priotrize {
  constructor(public urgency, public importance, public effort, public priority) {

  }
}

