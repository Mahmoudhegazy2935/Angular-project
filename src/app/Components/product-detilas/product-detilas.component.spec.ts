import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetilasComponent } from './product-detilas.component';

describe('ProductDetilasComponent', () => {
  let component: ProductDetilasComponent;
  let fixture: ComponentFixture<ProductDetilasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetilasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
