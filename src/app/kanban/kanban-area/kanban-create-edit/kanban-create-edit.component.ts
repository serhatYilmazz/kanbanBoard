import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Kanibo} from '../area/kanibo/kanibo.model';
import {Store} from '@ngrx/store';

import * as KanbanActions from '../../store/kanban.actions';
import * as fromKanban from '../../store/kanban.reducer';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-kanban-create-edit',
  templateUrl: './kanban-create-edit.component.html',
  styleUrls: ['./kanban-create-edit.component.css']
})
export class KanbanCreateEditComponent implements OnInit {

  kaniboForm: FormGroup;
  editMode = false;
  sectionKeyName: string;
  id: number;

  oldKanibo: Kanibo;

  state: fromKanban.State;

  constructor(private store: Store<fromKanban.State>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.store.select('kanban').subscribe(
      (state: fromKanban.State) => {
        if (!state) {
          this.router.navigate(['/kanban', 'kanban-board']);
        } else {
          this.state = state;
        }
      }
    );

    this.route.params.subscribe(
      (param: Params) => {
        this.editMode = param.id != null;
        if (this.editMode) {
          this.sectionKeyName = param.sectionName;
          this.id = +param.id;
        }
      }
    );

    this.initializeForm();

  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new KanbanActions.UpdateKanibo({
        oldKanibo: this.oldKanibo,
        title: this.kaniboForm.value.title,
        description: this.kaniboForm.value.description,
        sectionKeyName: this.sectionKeyName
      }));
    } else {
      const newKanibo = new Kanibo(this.kaniboForm.value.title, this.kaniboForm.value.description, this.state.taskId, new Date(), null);
      this.store.dispatch(new KanbanActions.AddKanibo(newKanibo));
    }
    this.router.navigate(['/kanban', 'kanban-board']);
  }

  initializeForm() {
    let title = null;
    let description = null;

    if (this.editMode) {
      const theKanibos = this.state.section[this.sectionKeyName].list.filter(kanibo => {
        return kanibo.taskId === this.id;
      });
      this.oldKanibo = theKanibos.pop();
      title = this.oldKanibo.title;
      description = this.oldKanibo.description;
    }


    this.kaniboForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required])
    });

  }

}
