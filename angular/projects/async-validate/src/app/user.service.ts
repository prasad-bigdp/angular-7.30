import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  checkusername(un: string){
    //API call
    const isAvailable= un==='available'
    return isAvailable
  }
}
