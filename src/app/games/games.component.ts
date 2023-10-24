import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Game } from 'src/app/services/game-service/models/game'
import { GameService } from '../services/game-service/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent implements OnInit, OnDestroy {
  static routeName: string = 'games';

  games: Game[];
  gamesSub: Subscription;

  constructor(private gameService: GameService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.gamesSub = this.gameService.fetchGames().subscribe(games => {
      this.games = games;
      this.cdr.markForCheck();
    });

  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.gameService.addGame({ name } as Game)
      .subscribe(game => {
        this.games.push(game);
        this.cdr.markForCheck();
      });
  }
  delete(game: Game): void {
    this.games = this.games.filter(h => h !== game);
    this.gameService.deleteGame(game).subscribe(() => this.cdr.markForCheck());
  }
  ngOnDestroy(): void {
    this.gamesSub.unsubscribe();
  }

}
