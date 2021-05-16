import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkrequirementComponent } from './add-workrequirement.component';

describe('AddWorkrequirementComponent', () => {
  let component: AddWorkrequirementComponent;
  let fixture: ComponentFixture<AddWorkrequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkrequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
