import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductsComponent } from './index-products.component';

describe('IndexProductsComponent', () => {
  let component: IndexProductsComponent;
  let fixture: ComponentFixture<IndexProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
