import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifeCycle';
  value = "shekhar"
  toggle = true;
  fun()
  {
    this.toggle=!this.toggle
  }
}
