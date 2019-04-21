import {Component, Input, OnInit} from '@angular/core';
import {Kanibo} from './kanibo.model';

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

}
