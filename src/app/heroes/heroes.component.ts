import { Component, OnInit } from '@angular/core';

import { Hero, HEROES } from 'src/app/services/hero-service/models/hero'
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.fetchHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
