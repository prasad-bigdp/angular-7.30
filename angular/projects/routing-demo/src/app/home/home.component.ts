import { Component,OnInit } from '@angular/core';
import { FakeProductsService } from '../fake-products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(private fs: FakeProductsService)
  {

  }
  ngOnInit()
  {
    this.fs.getData().subscribe((data)=>this.products=data.products)
  }

}
