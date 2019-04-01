import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindArtistComponent } from './find-artist/find-artist.component';
import { FindSongComponent } from './find-song/find-song.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'findartist', component: FindArtistComponent},
  {path: 'findsong', component: FindSongComponent},
  {path: '**', component: HomepageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
