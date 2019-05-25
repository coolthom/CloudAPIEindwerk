import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindSongComponent } from './find-song/find-song.component';
import { FindArtistComponent } from './find-artist/find-artist.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { TabService } from './tab.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ArtistInfoService } from './artist-info.service';
import { CardModule } from 'primeng/card';
import { FindGuitarComponent } from './find-guitar/find-guitar.component';
import { GuitarService } from './guitar.service';



@NgModule({
  declarations: [
    AppComponent,
    FindSongComponent,
    FindArtistComponent,
    NavComponent,
    HeaderComponent,
    FindGuitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    CheckboxModule,
    CardModule
  ],
  providers: [TabService, ArtistInfoService, GuitarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
