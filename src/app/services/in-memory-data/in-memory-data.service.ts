import { Injectable } from '@angular/core';
import { Game } from '../game-service/models/game';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 0, name: 'CS GO 2 ', isViolence: true, genres: ['Шутер', 'Мультиплеер', 'Бесплатно'], price: 0, image: 'https://upload.wikimedia.org/wikipedia/ru/d/db/Counter-strike_2.jpg' },
      { id: 1, name: 'DOTA 2 ', isViolence: true, genres: ['MOBA', 'Бесплатно', 'Мультиплеер'], price: 0, image: 'https://upload.wikimedia.org/wikipedia/ru/8/8e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg' },
      { id: 2, name: 'GTA 5', isViolence: true, genres: ['Шутер', 'Мультиплеер'], price: 1100, image: 'https://man-made.ru/upload/resize_cache/webp/iblock/497/gta5-b.webp' },
      { id: 3, name: 'Minecraft ', isViolence: false, genres: ['Выживание', 'Мультиплеер'], price: 2000, image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png' },
      { id: 4, name: 'Need for Speed', isViolence: false, genres: ['Гонки'], price: 5000, image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d0/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Need_for_Speed_Underground_2.jpg/640px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Need_for_Speed_Underground_2.jpg' },
      { id: 5, name: 'Cyberpunk 2077', isViolence: true, genres: ['Шутер'], price: 2000, image: 'https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg' },
      { id: 6, name: 'Witcher 3: Wild Hunt ', isViolence: true, genres: ['Файтинг'], price: 2000, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg' },
      { id: 7, name: 'Overwatch', isViolence: true, genres: ['Шутер', 'Мультиплеер'], price: 1100, image: 'https://upload.wikimedia.org/wikipedia/ru/3/33/Overwatch_Origins_Edition_PC_cover.jpg' },
    ]
    return { games };
  }
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 0;
  }
}