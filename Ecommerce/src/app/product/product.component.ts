import { Component } from '@angular/core';
import { FakeProductsService } from '../fake-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  id: any;item:any
  constructor(private fs:FakeProductsService,private route:ActivatedRoute)
  {
  }
  ngOnInit()
  {
    this.route.params.subscribe(p => this.id = p[ 'id' ])
    console.log(this.id)
    this.fs.getData(this.id).subscribe((data)=>this.item=data)
  }
}
