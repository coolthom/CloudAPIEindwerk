import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  URL: string;
  constructor(private http: HttpClient) {
    this.URL = "http://www.songsterr.com/a/ra/songs/byartists.json?artists=";

   }
   getArtist(artist: string){
     return this.http.get<Array<generalArtist>>(this.URL + artist);
   }
}
export interface Artist {
  id: number;
  type: string;
  nameWithoutThePrefix: string;
  useThePrefix: boolean;
  name: string;
}

export interface generalArtist {
  id: number;
  type: string;
  title: string;
  artist: Artist;
  chordsPresent: boolean;
  tabTypes: string[];
}
