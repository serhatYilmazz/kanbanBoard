import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Kanibo} from '../area/kanibo/kanibo.model';
import {Store} from '@ngrx/store';

import * as KanbanActions from '../../store/kanban.actions';
import * as fromKanban from '../../store/kanban.reducer';

@Component({
  selector: 'app-kanban-create-edit',
  templateUrl: './kanban-create-edit.component.html',
  styleUrls: ['./kanban-create-edit.component.css']
})
export class KanbanCreateEditComponent implements OnInit {

  kaniboForm: FormGroup;
  taskId: number;

  constructor(private store: Store<fromKanban.State>) { }

  ngOnInit() {

    this.store.select('kanban').subscribe(
      (state: fromKanban.State) => {
        this.taskId = state.taskId;
      }
    );

    this.kaniboForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.kaniboForm.value);
    const newKanibo = new Kanibo(this.kaniboForm.value.title, this.kaniboForm.value.description, this.taskId);
    this.store.dispatch(new KanbanActions.AddKanibo(newKanibo));
  }

}
