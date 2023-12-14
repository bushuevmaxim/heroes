import { Injectable } from '@angular/core';
import { Game } from '../game-service/models/game';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 0, name: 'CS GO 2 ', isViolence: true, genres: ['Шутер', 'Мультиплеер', 'Бесплатно'], price: 0 },
      { id: 1, name: 'DOTA 2 ', isViolence: true, genres: ['MOBA', 'Бесплатно', 'Мультиплеер'], price: 0 },
      { id: 2, name: 'Rust', isViolence: true, genres: ['Выживание', 'Мультиплеер'], price: 1100 },
      { id: 3, name: 'Minecraft ', isViolence: false, genres: ['Выживание', 'Мультиплеер'], price: 2000 },
      { id: 4, name: 'Need for Speed', isViolence: false, genres: ['Гонки'], price: 99999 },
    ]
    return { games };
  }
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 0;
  }
}