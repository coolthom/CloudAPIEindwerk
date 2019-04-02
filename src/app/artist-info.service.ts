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
    this.artistURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=";
    this.artistURL2 = "&api_key=" + this.secretKeyLastfm + "&format=json";
    
   }
   getArtistInfo(artist: string){
    return this.http.get<Reply>(this.artistURL + artist + this.artistURL2);
   }
}

export interface Image {
  '#text': string;
  size: string;
}

export interface Stats {
  listeners: string;
  playcount: string;
}

export interface Image2 {
  '#text': string;
  size: string;
}

export interface Artist2 {
  name: string;
  url: string;
  image: Image2[];
}

export interface Similar {
  artist: Artist2[];
}

export interface Tags {
  tag: any[];
}

export interface Link {
  '#text': string;
  rel: string;
  href: string;
}

export interface Links {
  link: Link;
}

export interface Bio {
  links: Links;
  published: string;
  summary: string;
  content: string;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
  image: Image[];
  streamable: string;
  ontour: string;
  stats: Stats;
  similar: Similar;
  tags: Tags;
  bio: Bio;
}

export interface Reply {
  artist: Artist;
}
