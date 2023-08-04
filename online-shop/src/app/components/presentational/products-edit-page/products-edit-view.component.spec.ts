import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditViewComponent } from './products-edit-view.component';

describe('ProductsEditViewComponent', () => {
  let component: ProductsEditViewComponent;
  let fixture: ComponentFixture<ProductsEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsEditViewComponent]
    });
    fixture = TestBed.createComponent(ProductsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
