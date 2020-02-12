import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOrderComponent } from './index-order.component';

describe('IndexOrderComponent', () => {
  let component: IndexOrderComponent;
  let fixture: ComponentFixture<IndexOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
