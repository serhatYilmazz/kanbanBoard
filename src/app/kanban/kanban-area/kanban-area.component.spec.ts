import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanAreaComponent } from './kanban-area.component';

describe('KanbanAreaComponent', () => {
  let component: KanbanAreaComponent;
  let fixture: ComponentFixture<KanbanAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
