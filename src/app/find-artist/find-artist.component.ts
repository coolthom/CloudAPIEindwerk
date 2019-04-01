import { Component, OnInit } from '@angular/core';
import { TabService, generalArtist, Artist } from '../tab.service';

@Component({
  selector: 'app-find-artist',
  templateUrl: './find-artist.component.html',
  styleUrls: ['./find-artist.component.css']
})
export class FindArtistComponent implements OnInit {

  results: Array<generalArtist>;
  sortedResults: Array<generalArtist>
  constructor(private artistsvc: TabService) { }

  ngOnInit() {
    this.artistsvc.getArtist("Trivium").subscribe((result) => {
      this.results = result;
      this.sortedResults = this.results.sort((n1) => {
        if (n1.chordsPresent == false) {
            return 1;
        }
    
        if (n1.chordsPresent == true) {
            return -1;
        }
    
        return 0;
    });
      //console.log(this.sortedResults);
    })
  }

}