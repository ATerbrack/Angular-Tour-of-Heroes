import {Component} from '@angular/core';
import {NgIf, NgFor, UpperCasePipe,} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroService} from '../hero.service';

import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent,
  ],
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService){}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); // Subscribe to listen asynchronously to the service
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}