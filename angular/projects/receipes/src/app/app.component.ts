import { Component } from '@angular/core';
import { ReceipeDataService } from './receipe-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receipes';
  receipes: any = []
  searchTerm!: string;
  count: number=0;
  constructor(private rds:ReceipeDataService)
  {
    
    this.rds.fetchData().subscribe((data:any) => {
        console.log(data.recipes);
        this.receipes = data.recipes
        console.log(this.receipes)
      })
 
    console.log(this.receipes)
  }
  search()
  {
    this.rds.searchData(this.searchTerm)
     .subscribe((data:any)=>this.receipes=data.recipes)
  }
  add()
  {
    this.count++;
  }
}
