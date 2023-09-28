import { Injectable } from '@angular/core';
import { Hero } from '../hero-service/models/hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Volverine' },
      { id: 1, name: 'Thanos' },
      { id: 2, name: 'Spider-Man' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Doctor Doom' },
      { id: 5, name: 'Iron Man' },
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}