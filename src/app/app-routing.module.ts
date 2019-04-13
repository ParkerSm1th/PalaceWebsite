import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { StafflistComponent } from './stafflist/stafflist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'staff', component: StafflistComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
