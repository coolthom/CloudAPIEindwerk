import { Component, OnInit } from '@angular/core';
import { TabService, generalArtist, Artist } from '../tab.service';
import { HttpClient } from '@angular/common/http';
import { ArtistInfoService, Reply } from '../artist-info.service';

@Component({
  selector: 'app-find-artist',
  templateUrl: './find-artist.component.html',
  styleUrls: ['./find-artist.component.css']
})
export class FindArtistComponent implements OnInit {

  reply: Reply;
  aTag: string;
  constructor(private artistService: ArtistInfoService) {

  }

  ngOnInit() {
    this.artistService.getArtistInfo("Linkin Park").subscribe((result) => {
      this.reply = result;
      var placeholder = this.reply.artist.bio.summary.search("href=\".*\">.*</a>");
      var holder = this.reply.artist.bio.summary.search("\">.*</a>");
      this.aTag = this.reply.artist.bio.summary.substring(placeholder+6,holder)
      this.reply.artist.bio.summary = this.reply.artist.bio.summary.substring(0, placeholder -4);
      //console.log(this.reply.artist.bio.summary);
    })
  }

}