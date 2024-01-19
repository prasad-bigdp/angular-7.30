import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'data-binding2';
  name = 'something';
  inp!:string;
  imgUrl =
    'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=';
  isDark = true
  isMain = true
  something = true;
  prasad = "uppercase"
  myColor = 'blue'
  noColor = ''
  myMethod(): void {
    console.log("hellooooooooooooooooooooooooo")
    if (this.isDark) {
      this.isDark = false
    }
    else {
      this.isDark = true
    }
  }
  inputChange(e: Event) {
    console.log(e)
    this.inp = (e.target as HTMLInputElement).value;
    console.log(this.inp)
  }
}