import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TabService, generalArtist } from '../tab.service';

@Component({
  selector: 'app-find-song',
  templateUrl: './find-song.component.html',
  styleUrls: ['./find-song.component.css']
})
export class FindSongComponent implements OnInit {

  @ViewChild('songBox') songBox: ElementRef;

  results: Array<generalArtist>;
  sortedResults: Array<generalArtist>;
  sortOnChords: boolean;
  constructor(private artistsvc: TabService) { 
    this.sortOnChords = false;
  }
  ngOnInit() {
    this.searchSong();
  }
  searchSong(requestedSong: string = "song"){
    this.artistsvc.getSong(requestedSong).subscribe((result) => {
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
      } else this.sortedResults = this.results.sort();
      //console.log(this.sortedResults);
    })
  }
  getSong(){
    this.searchSong(this.songBox.nativeElement.value);
  }
}
