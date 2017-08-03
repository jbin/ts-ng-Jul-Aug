import { ProductModel } from './../product-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'stn-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  id = new FormControl(null, [Validators.required]);
  name = new FormControl();
  price = new FormControl();
  weight = new FormControl();

  product: ProductModel;

  constructor(private builder: FormBuilder) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
  }

  ngOnInit() {
  }

  save() {
    this.product = this.productForm.value;

  }

}
