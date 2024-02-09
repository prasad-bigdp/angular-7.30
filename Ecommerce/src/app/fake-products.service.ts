import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeProductsService {
  count:number=0;
  constructor(private ht: HttpClient) { }
  
  getData():Observable<any>
  {
    return this.ht.get('https://dummyjson.com/products');
  }
  add()
  {
    return this.count++;
  }
}
