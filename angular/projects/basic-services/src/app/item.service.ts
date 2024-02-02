import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: string[] = [];
  private products:any = [];
  constructor(private hc:HttpClient)
  {

  }
  getProducts()
  {
    this.hc.get('https://fakestoreapi.com/products')
      .subscribe((data) => {
        console.log(data);
        this.products = data;
        return this.products;
      })
  }
  addItems(i: string) {
    this.items.push(i)
  }
  getitems() {
    return this.items
  }
  clearItems()
  {
    this.items=[]
  }

}
