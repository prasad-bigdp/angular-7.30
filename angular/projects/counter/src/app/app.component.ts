import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
  count = 0;
  incr() {
    this.count++;
  }
  decr()
  {
    this.count -= 1;
  }
  reset()
  {
    this.count=0
  }
}
