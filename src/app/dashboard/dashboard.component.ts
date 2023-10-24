import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Game } from '../services/game-service/models/game';
import { OnInit } from '@angular/core';
import { GameService } from '../services/game-service/game.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  static routeName: string = 'dashboard';
  games: Game[];
  gamesSub: Subscription;

  constructor(private gameService: GameService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {

    this.gamesSub = this.gameService.fetchGames().subscribe(games => {
      this.games = games.slice(0, 4);
      this.cdr.markForCheck();
    });

  }

  ngOnDestroy(): void {
    this.gamesSub.unsubscribe();
  }
}
