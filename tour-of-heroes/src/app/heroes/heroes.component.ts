import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  /*
  Alternatively...
  template: '<p>Hello, World! You can write html right in the template instead of refering to a different file.</p>',
  */
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  hero = "Wind Storm";

}
