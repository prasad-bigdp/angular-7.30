import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() myEvent = new EventEmitter();
  data = {
    name: "raj",
    age:20
  }
  count = 0;
  counter()
  {
    this.count++;
  }
  inp=''
  fun() {
    const message=" hello everyone"
  console.log("button clicked")
   this.myEvent.emit(this.inp)
}

}
