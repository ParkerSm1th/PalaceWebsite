import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { PlayComponent } from './play/play.component';
import { PlayersSearchComponent } from './players-search/players-search.component';
import { ParksComponent } from './parks/parks.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
  { path: 'staff', component: StafflistComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'profile', component: PlayersSearchComponent },
  { path: 'parks', component: ParksComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
