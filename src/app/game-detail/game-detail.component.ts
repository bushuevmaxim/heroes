import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/services/game-service/models/game'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GameService } from '../services/game-service/game.service';
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  static routeName: string = 'detail/:id';
  @Input() game: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGame()
  }
  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.gameService.fetchGameByID(id)
      .subscribe(game => this.game = game);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {

    this.gameService.updateGame(this.game)
      .subscribe(() => this.goBack());
  }
}
