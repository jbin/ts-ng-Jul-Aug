import { Observable } from 'rxjs/Observable';
import { ProductService } from './../product.service';
import { ProductModel } from './../product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Observable<Array<ProductModel>>;

  constructor(private pService: ProductService) {

    this.productList = pService.getList();
   }

  ngOnInit() {
  }

}
