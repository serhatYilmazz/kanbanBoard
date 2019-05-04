import {Component, Input, OnInit} from '@angular/core';
import {Kanibo} from './kanibo.model';
import * as moment from 'moment';

@Component({
  selector: 'app-kanibo',
  templateUrl: './kanibo.component.html',
  styleUrls: ['./kanibo.component.css']
})
export class KaniboComponent implements OnInit {
  @Input() kanibo: Kanibo;
  @Input() sectionKeyName: string;

  showDescription = false;

  constructor() { }

  ngOnInit() {
  }

  getAvailability() {
    return moment(this.kanibo.creationDate).startOf().fromNow();
  }
}
