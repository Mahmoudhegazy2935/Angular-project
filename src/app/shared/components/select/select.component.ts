import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
@Input() title:string=""
@Input() data:any[]=[]
@Output() selectedValue = new EventEmitter()
detectchanges(event :any){
  this.selectedValue.emit(event)
}
}
