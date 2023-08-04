import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit-view',
  templateUrl: './products-edit-view.component.html'
})
export class ProductsEditViewComponent {
  constructor(
    private route: ActivatedRoute
  ) {}
}
