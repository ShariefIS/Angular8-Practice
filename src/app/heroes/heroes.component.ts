import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HerosList } from './mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroObject: Hero = {
    id: 1,
    name: "Kurosaki Ichigo",
    speciality: "Shinigami"
  };
  heros: object;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
    this.heros = HerosList;
  }
  onSelect(heroparam: Hero): void {
    this.selectedHero = heroparam;
  }
}
