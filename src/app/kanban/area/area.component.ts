import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../section';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  @Input() section: Section;
  constructor() { }

  ngOnInit() {
  }

}
