import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Item {
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();
  // remove is now a custom event, triggered by the button click that calls the remove event
  // the event bubbles up to the parent component (AppComponent)

  editable = false;

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }
}
