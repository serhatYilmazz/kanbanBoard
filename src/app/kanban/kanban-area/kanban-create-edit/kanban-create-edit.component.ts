import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Kanibo, Priotrize, Timer} from '../area/kanibo/kanibo.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';

import * as KanbanActions from '../../store/kanban.actions';
import * as fromKanban from '../../store/kanban.reducer';
import * as moment from 'moment';

import {Priority} from '../../../enums/enums';

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

  priorityKeys;

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
          this.initializeForm();
        }
      }
    );
    this.initializeForm();
    this.priorityKeys = Object.keys(Priority);
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new KanbanActions.UpdateKanibo({
        oldKanibo: this.oldKanibo,
        title: this.kaniboForm.value.title,
        description: this.kaniboForm.value.description,
        priotrize: {
          urgency: this.kaniboForm.value.priotrize.urgency,
          importance: this.kaniboForm.value.priotrize.importance,
          effort: this.kaniboForm.value.priotrize.effort,
          priority: this.kaniboForm.value.priotrize.priority,
        },
        sectionKeyName: this.sectionKeyName
      }));
    } else {
      const newKanibo = new Kanibo(
        this.kaniboForm.value.title,
        this.kaniboForm.value.description,
        this.state.taskId, new Date(),
        null,
        new Priotrize(this.kaniboForm.value.priotrize.urgency,
          this.kaniboForm.value.priotrize.importance,
          this.kaniboForm.value.priotrize.effort,
          this.kaniboForm.value.priotrize.priority),
        new Timer(0, {}));
      newKanibo.time.dailySpentTime[moment().format('YYYY-MM-DD')] = 0

      this.store.dispatch(new KanbanActions.AddKanibo(newKanibo));
    }
    this.router.navigate(['/kanban', 'kanban-board']);
  }

  initializeForm() {
    let title = null;
    let description = null;
    let urgency = 1;
    let importance = 1;
    let effort = 1;
    let priority = 1;

    if (this.editMode) {
      const theKanibos = this.state.section[this.sectionKeyName].list.filter(kanibo => {
        return kanibo.taskId === this.id;
      });
      this.oldKanibo = theKanibos.pop();
      title = this.oldKanibo.title;
      description = this.oldKanibo.description;
      urgency = this.oldKanibo.priotrize.urgency;
      importance = this.oldKanibo.priotrize.importance;
      effort = this.oldKanibo.priotrize.effort;
      priority = this.oldKanibo.priotrize.priority;
    }


    this.kaniboForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      priotrize: new FormGroup({
        urgency: new FormControl(urgency, [Validators.required]),
        importance: new FormControl(importance, [Validators.required]),
        effort: new FormControl(effort, [Validators.required]),
        priority: new FormControl(priority, [Validators.required])
      })
    });

  }

  getButtonName() {
    if (this.editMode) {
      return 'Update';
    } else {
      return 'Create';
    }
  }

  getPriority(priority) {
    return Priority[priority];
  }

}
