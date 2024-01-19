import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'summary';
  isdisabled = true;
  name = "shekhar"
  isCenter = false;
  input = ""
  na=""
  display()
  {

  }
  inp(e:any)
  {
    this.input = e.target.value;
  }
}
