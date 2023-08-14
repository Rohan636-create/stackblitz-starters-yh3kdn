import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, DetailsComponent, CommonModule],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onHeroSelected(hero: Hero) {
    console.log(hero);
  }
}
