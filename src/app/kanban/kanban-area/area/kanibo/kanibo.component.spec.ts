import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaniboComponent } from './kanibo.component';

describe('KaniboComponent', () => {
  let component: KaniboComponent;
  let fixture: ComponentFixture<KaniboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaniboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaniboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
