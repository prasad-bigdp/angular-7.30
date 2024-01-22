import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() myEvent = new EventEmitter();
  count = 0;
  childFun()
  {
    const data = "hello world";
    this.myEvent.emit(data)
  }
  incr()
  {
    this.count++;
  }
}
