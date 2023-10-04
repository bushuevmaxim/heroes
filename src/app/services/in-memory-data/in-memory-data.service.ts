import { Injectable } from '@angular/core';
import { Game } from '../game-service/models/game';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 0, name: 'GTA 5' },
      { id: 1, name: 'Cyberpunk' },
      { id: 2, name: 'Mario' },
      { id: 3, name: 'DOTA 2' },
      { id: 4, name: 'CS 2' },
      { id: 5, name: 'UFC' },
    ];
    return { games };
  }
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 0;
  }
}