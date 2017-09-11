import { Component, OnInit } from '@angular/core';

import { GameService } from "../services/games.service";




@Component({
  selector: 'app-page-photo',
  templateUrl: './page-photo.component.html',
  styleUrls: ['./page-photo.component.scss']
})


export class PagePhotoComponent implements OnInit {


  games;


  constructor(private gameService: GameService) {
  }


  ngOnInit() {

    this.gameService.getGames().subscribe(p=> this.games = p);

  }

}
