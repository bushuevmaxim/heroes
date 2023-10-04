import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/services/game-service/models/game'
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  static routeName: string = 'games';

  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.fetchGames().subscribe(games => this.games = games);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.gameService.addGame({ name } as Game)
      .subscribe(game => {
        this.games.push(game);
      });
  }
  delete(game: Game): void {
    this.games = this.games.filter(h => h !== game);
    this.gameService.deleteGame(game).subscribe();
  }
}
