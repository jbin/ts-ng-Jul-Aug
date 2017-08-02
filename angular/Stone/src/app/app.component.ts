import { ProductModel } from './products/product-model';
import { Component } from '@angular/core';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stn';
  prd: ProductModel = new ProductModel(0, 'Test', 123, 321);
}
