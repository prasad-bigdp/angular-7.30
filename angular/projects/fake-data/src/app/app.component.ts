import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: any;
  c = 0;
  constructor()
  {
    this.fetchData();
  }
  fetchData()
  {
    fetch('http://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => this.data = data)
      .catch((err)=>console.error(err))
  }
  add()
  {
    this.c++;
  }

}
