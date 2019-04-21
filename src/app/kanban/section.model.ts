import {Kanibo} from './area/kanibo/kanibo.model';

export class SectionModel {
  constructor(public title: string, public list: Kanibo[], public order: number) { }
}
