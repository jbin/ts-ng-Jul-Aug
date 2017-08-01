import { ProductModel } from './../product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = new ProductModel(1, 'Denkmalstein', 12445, 126);

  constructor() { }

  ngOnInit() {
  }

  raisePrice() {
    this.product.price += 5;
  }

}
