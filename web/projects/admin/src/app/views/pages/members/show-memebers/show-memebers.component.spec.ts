import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMemebersComponent } from './show-memebers.component';

describe('ShowMemebersComponent', () => {
  let component: ShowMemebersComponent;
  let fixture: ComponentFixture<ShowMemebersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMemebersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMemebersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
