import { Component,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {
  @Input() count!: number;
  ngOnChanges()
  {
    console.log(this.count)
  }
}
