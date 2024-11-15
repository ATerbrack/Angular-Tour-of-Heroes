import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';

import { Hero} from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';

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

export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesCompoent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); // Subscribe to listen asynchronously to the service
  }
}