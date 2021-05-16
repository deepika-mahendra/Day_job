import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkrequirementListComponent } from './workrequirement-list.component';

describe('WorkrequirementListComponent', () => {
  let component: WorkrequirementListComponent;
  let fixture: ComponentFixture<WorkrequirementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkrequirementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkrequirementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
