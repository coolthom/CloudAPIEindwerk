import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  artistURL: string;
  songURL: string;

  
  constructor(private http: HttpClient) {
    this.artistURL = "http://www.songsterr.com/a/ra/songs/byartists.json?artists=";
    this.songURL = "https://www.songsterr.com/a/ra/songs.json?pattern=";
   }
   getArtist(artist: string){
     return this.http.get<Array<generalArtist>>(this.artistURL + artist);
   }
   getSong(songName: string){
    return this.http.get<Array<generalArtist>>(this.songURL + songName);
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
