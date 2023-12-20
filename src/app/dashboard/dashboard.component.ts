import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Game } from '../services/game-service/models/game';
import { OnInit } from '@angular/core';
import { GameService } from '../services/game-service/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  static routeName: string = 'dashboard';
  games$: Observable<Game[]>;


  args: unknown[] | undefined = undefined

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.games$ = this.gameService.fetchGames();
  }


  filtersChanged(args: unknown[]) {
    console.log('pashel');
    this.args = args;
    console.log(args);
  }


}
