import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindArtistComponent } from './find-artist/find-artist.component';
import { FindSongComponent } from './find-song/find-song.component';
import { FindGuitarComponent } from './find-guitar/find-guitar.component';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {path: 'findartist', component: FindArtistComponent},
  {path: 'findguitar', component: FindGuitarComponent, canActivate: [AuthGuard]},
  {path: 'callback', component: CallbackComponent},
  {path: '**', component: FindSongComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
