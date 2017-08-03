import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule
  ],
  declarations: [ProductComponent, EditProductComponent],
  exports: [ProductComponent, EditProductComponent]
})
export class ProductsModule { }
