import { Component, OnInit } from '@angular/core';
import { JsonService } from "../services/json.service";

@Component({
  selector: 'app-page-photo',
  templateUrl: './page-photo.component.html',
  styleUrls: ['./page-photo.component.scss']
})

export class PagePhotoComponent implements OnInit {
  
  // declaring variable
  games;
  //typeOfGame;
  typeOfGame = 'slots';
  
  // using the game service
  constructor(private jsonService: JsonService) {
  }

  ngOnInit() {
    this.jsonService.getJson('../assets/covers.json').subscribe(p => this.games = p.filter(a => a.type == this.typeOfGame));
  }
}
