
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageProjectComponent } from './page-project/page-project.component';
import { PagePhotoComponent } from './page-photo/page-photo.component';
import { AboutModule } from './page-about/page-about.module';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageHomeComponent,
    PageAboutComponent,
    PageProjectComponent,
    PagePhotoComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
