import { Injectable } from '@angular/core';
import { HEROES, Hero } from './models/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  fetchHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
