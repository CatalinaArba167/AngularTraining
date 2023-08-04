import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddViewComponent } from './products-add-view.component';

describe('ProductsAddViewComponent', () => {
  let component: ProductsAddViewComponent;
  let fixture: ComponentFixture<ProductsAddViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAddViewComponent]
    });
    fixture = TestBed.createComponent(ProductsAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
