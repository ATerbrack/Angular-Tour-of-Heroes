import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe, CurrencyPipe } from '@angular/common'; // FIRST, Import this to ts file... 

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ UpperCasePipe, CurrencyPipe ], // THEN pass it to html file.
  templateUrl: './heroes.component.html',
  /*
  Alternatively...
  template: '<p>Hello, World! You can write html right in the template instead of refering to a different file.</p>',
  */
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  value = 1.23;

  hero: Hero = { 
    id: 1, 
    name: 'Storm',
  };

}
