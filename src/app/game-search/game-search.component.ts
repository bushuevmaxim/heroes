import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Game } from '../services/game-service/models/game';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameSearchComponent implements OnInit {
  games$: Observable<Game[]>;
  private searchTerms = new Subject<string>();

  constructor(private gameService: GameService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.games$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.gameService.searchGames(term)),
    );
  }
}