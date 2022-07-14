import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false;

  @Input()
  item!: Item;
  @Input()
  newItem!: string;
  @Output() 
  remove = new EventEmitter<Item>();

  //tells the code if while saving we didnt make any changes
  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
