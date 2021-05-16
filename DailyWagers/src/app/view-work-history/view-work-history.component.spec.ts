import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkHistoryComponent } from './view-work-history.component';

describe('ViewWorkHistoryComponent', () => {
  let component: ViewWorkHistoryComponent;
  let fixture: ComponentFixture<ViewWorkHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
