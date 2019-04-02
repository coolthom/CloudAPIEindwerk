import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindSongComponent } from './find-song/find-song.component';
import { FindArtistComponent } from './find-artist/find-artist.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TabService } from './tab.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ArtistInfoService } from './artist-info.service';


@NgModule({
  declarations: [
    AppComponent,
    FindSongComponent,
    FindArtistComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [TabService, ArtistInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
