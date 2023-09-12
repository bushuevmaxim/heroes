import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/heroes/models/hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = { id: 0, name: 'iron man' }

  constructor() {
  }
  ngOnInit(): void {
  }
}
