// Imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
//import { routing } from './app.routes';

// Decorator
@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
		//routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		DirectoryComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	// Module class
}
