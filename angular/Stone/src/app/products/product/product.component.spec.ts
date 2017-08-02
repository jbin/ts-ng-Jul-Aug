import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add Price', () => {
    const btnElem = fixture.debugElement.query(By.css('button'));
    const priceElem = fixture.debugElement.query(By.css('#price'));
    const oldprice = component.product.price;
    btnElem.nativeElement.click();
    fixture.detectChanges();
    console.log(priceElem.nativeElement.textContent);

    expect(+(priceElem.nativeElement.textContent)).toBeGreaterThan(oldprice);
  });
});
