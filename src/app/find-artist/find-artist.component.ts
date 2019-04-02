import { Component, OnInit } from '@angular/core';
import { TabService, generalArtist, Artist } from '../tab.service';

@Component({
  selector: 'app-find-artist',
  templateUrl: './find-artist.component.html',
  styleUrls: ['./find-artist.component.css']
})
export class FindArtistComponent implements OnInit {

  results: Array<generalArtist>;
  sortedResults: Array<generalArtist>;
  sortOnChords: boolean;
  constructor(private artistsvc: TabService) { 
    this.sortOnChords = false;
  }

  ngOnInit() {
    this.artistsvc.getArtist("Tool").subscribe((result) => {
      this.results = result;
      if(this.sortOnChords){
          this.sortedResults = this.results.sort((n1) => {
            if (n1.chordsPresent == false) {
                return 1;
            }
        
            if (n1.chordsPresent == true) {
                return -1;
            }
        
            return 0;
        });
      } else this.sortedResults = this.results;
      
      //console.log(this.sortedResults);
    })
  }

}