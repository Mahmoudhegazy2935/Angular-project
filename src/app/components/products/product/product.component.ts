import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product!: Product
@Output() item=new EventEmitter
addButton:boolean = false;
amount:number = 0;
add(){
this.item.emit({item:this.product ,quantity:this.amount})
}


}
