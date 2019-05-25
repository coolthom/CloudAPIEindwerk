import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindArtistComponent } from './find-artist/find-artist.component';
import { FindSongComponent } from './find-song/find-song.component';
import { FindGuitarComponent } from './find-guitar/find-guitar.component';

const routes: Routes = [
  {path: 'findartist', component: FindArtistComponent},
  {path: 'findguitar', component: FindGuitarComponent},
  {path: '**', component: FindSongComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
