import { Component } from '@angular/core';
import {ItemService} from './item.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BasicServices';
  items: string[];
  newValue!: string;
  prod:any=[]
  constructor(private is:ItemService)
  {
    this.items= this.is.getitems()
  }
  add()
  {
    this.is.addItems(this.newValue)
    this.items = this.is.getitems() 
  }
  getProducts()
  {
    this.prod = this.is.getProducts()
    console.log(this.prod)
  }
  clear()
  {
     this.is.clearItems();
     this.items = this.is.getitems(); 
  }
}
