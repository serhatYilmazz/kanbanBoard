import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanibo',
  templateUrl: './kanibo.component.html',
  styleUrls: ['./kanibo.component.css']
})
export class KaniboComponent implements OnInit {
  @Input() kanibo: KaniboComponent;
  private showDescription: boolean;

  constructor() { }

  ngOnInit() {
  }

}
