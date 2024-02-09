import { Component } from '@angular/core';
import { FakeProductsService } from './fake-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  c:any
  constructor(private fs:FakeProductsService)
  {

  }
  add()
  {
     this.c= this.fs.add()
  }
}
