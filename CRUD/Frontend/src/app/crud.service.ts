import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private hc: HttpClient) {
    
  }
  read():Observable<any>
  {
    return this.hc.get('http://localhost:3000/receipes');
  }
  delete(id:any):Observable<any>
  {
    return this.hc.delete(`http://localhost:3000/receipes/${id}`);
  }
  updt(id:number,title:string)
  {
    return this.hc.put(`http://localhost:3000/receipes/${id}`, {
    name:title
  });
  }
}
