import { Component } from '@angular/core';
import { Hero } from '../services/hero-service/models/hero';
import { OnInit } from '@angular/core';
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  static routeName: string = 'dashboard';
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.fetchHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
