import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReceipeDataService {
  receipes:any=[]
  constructor(private hc: HttpClient) { 
  }
  fetchData():Observable<any>
  { 
   return  this.hc.get('https://dummyjson.com/recipes')  
  }
  searchData(str:string)
  {
    return this.hc.get(`https://dummyjson.com/recipes/search?q=${str}`);
  }
  
}
