import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() data:any={}
  @Output() product=new EventEmitter()
  addButton:boolean= false;
  amount:number=0;
  add(){
      this.product.emit({products:this.data , quantity:this.amount})
  }

}
