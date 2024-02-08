import { Component,Input,OnChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnChanges,OnInit{
  @Input() val: any;
  constructor()
  {
    console.log("constructor called")
  }
  ngOnChanges()
  {
    console.log("ngOnchanges Triggered")
  }
  ngOnInit()
  {
    console.log("ngOnInIt triggered")
  }
  ngDoCheck()
  {
    console.log("ngDoCheck triggered, class detection will be done twice")
  }
  ngAfterContentInit()
  {
    console.log("ngContentAfterInit got triggered")
  }
  ngAfterContentChecked()
  {
     console.log('ngContentAfterchecked got triggered');
  }
  ngAfterViewInit()
  {
    console.log("ngAfterViewInit got triggered")
  }
  ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked got triggered")
  }
  ngOnDestroy()
  {
    console.log("ngOnDestroy got triggered")
  }
}
/* DOM-Document Object Model--> content DOM-->inner HTML,view DOM-->template */
