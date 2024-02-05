import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudService } from './crud.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  receipes:any=[]
  constructor(private crud:CrudService)
  {
    this.crud.read().subscribe((data) => {
      this.receipes = data;
     })
  }
  delete(id:any)
  {
    this.crud.delete(id).subscribe((data) => {
      console.log(data, "deleted")
      window.location.reload()
    })
  }
   
}
