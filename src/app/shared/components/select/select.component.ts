import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter();
  imagesofcategory: string[] = [
    '../../../../1 (1).png',
    '../../../../1 (2).png',
    '../../../../1 (3).png',
    '../../../../1 (4).png',
  ];

  detectchanges(event: any) {
    this.selectedValue.emit(event);
  }

}
