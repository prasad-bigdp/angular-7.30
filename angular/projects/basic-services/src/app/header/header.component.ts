import { Component } from '@angular/core';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  items: string[]
  constructor(private is: ItemService)
  {
    this.items = this.is.getitems();
  }
}
