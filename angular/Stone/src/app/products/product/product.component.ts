import { ProductModel } from './../product-model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() priceChange = new EventEmitter<number>();
  @Input() product: ProductModel = {
    'id': 12,
    'name': 'Granitstein Gravo',
    'price': 134.56,
    'weight': 12
  };

  @Input() isAvailable = true;

  constructor() { }

  ngOnInit() {
  }

  raisePrice() {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }

}
