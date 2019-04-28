import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCreateEditComponent } from './kanban-create-edit.component';

describe('KanbanCreateEditComponent', () => {
  let component: KanbanCreateEditComponent;
  let fixture: ComponentFixture<KanbanCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
