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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

library.add(fas);




@NgModule({
  declarations: [
    AppComponent,
    FindSongComponent,
    FindArtistComponent,
    NavComponent,
    HeaderComponent,
    FindGuitarComponent,
    CallbackComponent
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
    CardModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [TabService, ArtistInfoService, GuitarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
