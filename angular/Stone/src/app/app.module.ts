import { ProductsModule } from './products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule  } from '@angular/material';
import { AppComponent } from './app.component';
import { BruttoPipe } from './brutto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BruttoPipe
  ],
  imports: [
    BrowserModule, ProductsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
