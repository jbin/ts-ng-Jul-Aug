import { ProductModel } from './../product-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('data') product: ProductModel = {
    'id': 12,
    'name': 'Granitstein Gravo',
    'price': 134.56,
    'weight': 12
  };

  constructor() { }

  ngOnInit() {
  }

  raisePrice() {
    this.product.price += 5;
  }

}
