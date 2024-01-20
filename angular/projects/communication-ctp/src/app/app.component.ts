import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'communication-ctp';
  msg = ''
  met(name:string) {
    console.log(name)
  }
  fun2(m:any)
  {
    this.msg = m;    
  }
}
