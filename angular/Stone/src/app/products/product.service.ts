import { ProductModel } from './product-model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  api= 'http://ec2-52-29-179-224.eu-central-1.compute.amazonaws.com:8080/api/products';

  constructor(private http: Http) { }

  getList(): Observable<Array<ProductModel>> {
    return this.http.get(this.api).map(data => data.json())
    .catch( (e, data) => {
      console.log(e.status);
      throw e;
    });
  }

  addProduct(p: ProductModel) {
    // this.productList.push(p);
  }

}
