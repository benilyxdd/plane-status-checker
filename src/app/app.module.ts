import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// angular materials
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultScreenComponent } from './search-result-screen/search-result-screen.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchBarComponent,
		SearchResultScreenComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,

		// angular material
		MatButtonModule,
		MatInputModule,
	],
	providers: [HttpClientModule, ReactiveFormsModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
