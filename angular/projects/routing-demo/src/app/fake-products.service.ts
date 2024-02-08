import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeProductsService {

  constructor(private ht: HttpClient) { }
  
  getData():Observable<any>
  {
    return this.ht.get('https://dummyjson.com/products');
  }
}
