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

  constructor() { }

  ngOnInit() {
  }

  getAvailability() {
    return moment(this.kanibo.date).startOf().fromNow();
  }
}
