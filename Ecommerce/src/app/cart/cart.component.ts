import { Component } from '@angular/core';
import { FakeProductsService } from '../fake-products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: any[] = [];
  constructor(private fs: FakeProductsService) {}
  ngOnInit() {
    console.log(this.fs.getItems())
    this.items = this.fs.getItems();
    console.log(this.items)
  }
  remove(index:number)
  {
    this.items.splice(index, 1);
    this.fs.rem()
  }
}
