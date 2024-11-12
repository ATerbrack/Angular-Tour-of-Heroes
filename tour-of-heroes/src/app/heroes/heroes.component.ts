import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe, CurrencyPipe } from '@angular/common'; // FIRST, Import this to ts file... 
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ UpperCasePipe, CurrencyPipe, FormsModule, NgFor, ], // THEN pass it to html file.
  templateUrl: './heroes.component.html',
  /*
  Alternatively, inject the html right into the TS.
  template: '<p>Hello, World! You can write html right in the template instead of refering to a different file.</p>',
  */
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes = HEROES;

}
