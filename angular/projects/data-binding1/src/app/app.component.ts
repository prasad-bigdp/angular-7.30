import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title:string = 'data-binding1';
  // name:string = 'prasad';
  // course:string = 'Angular 16 &17';
  address: string =
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  // isGood: boolean = false;
  // getGreeting() {
  //   return "bye!Bye"
  // }
  isDisabled = false;
  isHeading = false;
  plchldr = 'enter your name';
  text = 'gjdgfdjsgfjdsghf';
}
