export class Kanibo {
  constructor(public title: string,
              public description: string,
              public taskId: number,
              public creationDate: Date,
              public updateDate: Date,
              public priotrize: Priotrize,
              public time: Timer,
              public isTimerActive: boolean
  ) {
  }
}

export class Priotrize {
  constructor(public urgency, public importance, public effort, public priority) {

  }
}

export class Timer {
  constructor(public totalSpentTime: number,
              public dailySpentTime: {
                [key: string]: number
              }) {

  }
}
