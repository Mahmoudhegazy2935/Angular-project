import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../../product/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() data:Product={} as Product
  @Output() item=new EventEmitter()
  addButton:boolean= false;
  amount:number=0
  add(){

      this.item.emit({item:this.data ,quantity:this.amount})
  }

}
