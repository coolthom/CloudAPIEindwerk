import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  APIURL: string;

  constructor(private http: HttpClient) {
    this.APIURL = "";
   }
   getAllGuitars(page: number = null){
    return this.http.get<Array<Guitar>>(this.APIURL + "?page=" + page);
   }
   getSpecificGuitar(name: string){
     return this.http.get<Array<Guitar>>(this.APIURL + "?name=" + name);
   }
   sortAllGuitars(){

   }
}
export interface Guitar {
  id: number;
  name: string;
  buildYear: number;
  purchaseYear: number;
  image: string;
}
