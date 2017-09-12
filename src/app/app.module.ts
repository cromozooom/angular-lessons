
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageProjectComponent } from './page-project/page-project.component';
import { PagePhotoComponent } from './page-photo/page-photo.component';
import { AboutModule } from './page-about/page-about.module';

//import {HttpClientModule} from '@angular/common/http';

import { JsonService } from './services/json.service';

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
    HttpModule,
    AboutModule,
    routing,
    //HttpClientModule
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
