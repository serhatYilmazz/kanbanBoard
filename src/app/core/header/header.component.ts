import { Component, OnInit } from '@angular/core';


import {environment} from '../../../environments/environment';
import {NgForm} from '@angular/forms';
import {CoreService} from '../service/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit() {
  }

  onFetchData() {
    this.coreService.fetchData();
  }

  onSaveData() {
    this.coreService.saveData();
  }

  getSaveCondition(): string {
    if (!environment.production) {
      return 'none';
    }
    return 'auto';
  }

  onSubmit(filterForm: NgForm) {
    this.coreService.filterByTaskId(+filterForm.value.taskId);
    filterForm.resetForm();
  }
}
