import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  APIURL: string;

  constructor(private http: HttpClient) {
    this.APIURL = "https://localhost:44330/api/guitars";
   }
   getAllGuitars(page: number){
    return this.http.get<Array<Guitar>>(this.APIURL + "?page=" + page);
   }
   getSpecificGuitar(name: string){
     return this.http.get<Array<Guitar>>(this.APIURL + "?name=" + name);
   }
   postGuitar(guitar: Guitar): Observable<Guitar>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //'Authorization': 'my-auth-token'
      })}
    return this.http.post<Guitar>(this.APIURL, guitar, httpOptions)
   }
}
export class Guitar {
  id: number;
  name: string;
  buildYear: number;
  purchaseYear: number;
  image: string;
}
