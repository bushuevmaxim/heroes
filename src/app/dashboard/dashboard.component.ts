import { Component } from '@angular/core';
import { Game } from '../services/game-service/models/game';
import { OnInit } from '@angular/core';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  static routeName: string = 'dashboard';
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.fetchGames().subscribe(games => this.games = games.slice(0, 4));
  }
}
