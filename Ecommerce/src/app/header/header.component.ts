import { Component,Input,OnChanges, OnInit } from '@angular/core';
import { FakeProductsService } from '../fake-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  count!: number;
  constructor(private cartService: FakeProductsService) {
    
  }
  ngOnInit()
  {
    this.cartService.cartSub$.subscribe((c) => this.count = c);
    console.log(this.count)
  }
}
