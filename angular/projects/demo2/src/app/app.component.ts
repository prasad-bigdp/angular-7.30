import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo2';
  name = "prasad"
  a = 5; b = 10;
  employee={
    name: "raj",
    age:20,
  }
}
