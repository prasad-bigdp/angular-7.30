import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FakeProductsService {
  private cartSubject = new BehaviorSubject(0);
  cartSub$ = this.cartSubject.asObservable();
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  constructor(private ht: HttpClient) {}

  getData(id?: any): Observable<any> {
    if (id) {
      return this.ht.get(`https://dummyjson.com/product/${id}`);
    } 
    else {
          return this.ht.get('https://dummyjson.com/products');
    }
  }
  add(i:any) {
    const c = this.cartSubject.getValue();
    this.cartSubject.next(c + 1);
    const item = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([ ...item, i ])
    console.log(this.cartItemsSubject.getValue())
  }
  rem() {
    const c = this.cartSubject.getValue();
    this.cartSubject.next(c - 1);
  }
  getItems()
  {
    return this.cartItemsSubject.getValue()
  }
}
