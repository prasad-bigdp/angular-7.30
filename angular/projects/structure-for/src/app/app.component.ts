import { Component } from '@angular/core';
interface Item {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  m = false;
  g = true;
  x = "red";
  y = "blue";
  title = 'structure-for';
  obj = {
    name: 'raj',
    age: 25,
    salary: 525252,
  };
  items: Item[] = [
    { id: 1, name: 'items 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 3' },
  ];
  fun(index: number, item: Item): number {
    return item.id;
  }
}
