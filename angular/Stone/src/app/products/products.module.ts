import { ProductService } from './product.service';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: EditProductComponent }
];



@NgModule({
  imports: [
    CommonModule, HttpModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ],
  providers: [ProductService],
  declarations: [ProductComponent, EditProductComponent, ProductListComponent],
  exports: [ProductComponent, EditProductComponent, ProductListComponent]
})
export class ProductsModule { }
