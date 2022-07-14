import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* class has filter which tell status of todo list */
export class AppComponent {
  
  title = 'todo-app';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    {description: 'eat' , done: true},
    {description: 'sleep' , done: false}
  ];

  /* get items wid if block. If filter is all then display all . Otherwise, it will show done tasks only */
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
 
  /* add item will add new item at top of list and remove will remove the item  */
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: { description: string; done: boolean; }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
