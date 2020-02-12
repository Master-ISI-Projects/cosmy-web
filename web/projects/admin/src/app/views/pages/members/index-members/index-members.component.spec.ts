import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMembersComponent } from './index-members.component';

describe('IndexMembersComponent', () => {
  let component: IndexMembersComponent;
  let fixture: ComponentFixture<IndexMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
