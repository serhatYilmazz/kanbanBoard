import {Kanibo} from './area/kanibo/kanibo.model';

export class Section {
  constructor(public title: string, public list: Kanibo[], public order: number) { }
}
