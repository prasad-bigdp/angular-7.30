import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {ChildComponent} from './child/child.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'communication-ctp';
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChildren(ChildComponent) children!:QueryList<ChildComponent>
  message!: string;

  parentFun(m: string) {
    this.message = m;
  }
  parentFun2()
  {
    this.child.incr()
    console.log(this.children)
    console.log(this.child.count)
  }
}
