import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { PlayersSearchComponent } from './players-search/players-search.component';

import { MatSnackBarModule, MatTooltipModule, MatFormFieldModule, MatInputModule,
	MatIconModule, MatTableModule, MatSortModule, MatBadgeModule,
	MatPaginatorModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule,
	MatCardModule, MatDividerModule, MatChipsModule, MatProgressSpinnerModule, MatButtonModule,
	MatDialogModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlayersComponent,
    PlayersSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatTableModule,
		MatSortModule,
		MatBadgeModule,
		MatPaginatorModule,
		MatTabsModule,
		MatDatepickerModule,
		MatInputModule,
		MatNativeDateModule,
		MatCardModule,
		MatDividerModule,
		MatChipsModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatDialogModule,
		MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
