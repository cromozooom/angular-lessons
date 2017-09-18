import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SpotifyService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
