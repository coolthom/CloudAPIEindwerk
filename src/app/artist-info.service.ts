import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistInfoService {

  secretKeyLastfm: string;
  sharedKeyLastfm: string;

  artistURL: string;
  artistURL2: string;

  constructor(private http: HttpClient) {
    this.secretKeyLastfm = "1282a613cef5c8582acf66feb257a764";
    this.sharedKeyLastfm = "6fa7a286142c9fa74e1961d85a3b2fb3";
    this.artistURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=";
    this.artistURL2 = "&api_key=" + this.secretKeyLastfm + "&format=json";
   }
   getArtistInfo(artist: string){
    return this.http.get(this.artistURL + artist + this.artistURL2);
   }
}
