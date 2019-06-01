import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  APIURL: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.APIURL = "https://localhost:44330/api/guitars";
    //this.APIURL = "https://cloudapiseindwerk.appspot.com/";

   }
   getAllGuitars(page: number){
    return this.http.get<Array<Guitar>>(this.APIURL + "?page=" + page, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
    });
   }
   getSpecificGuitar(name: string){
     return this.http.get<Array<Guitar>>(this.APIURL + "?name=" + name);
   }
   postGuitar(guitar: Guitar): Observable<Guitar>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ${this.authService.accessToken}'
      })}
    return this.http.post<Guitar>(this.APIURL, guitar, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
    });
   }
}
export class Guitar {
  id: number;
  name: string;
  buildYear: number;
  purchaseYear: number;
  image: string;
}
