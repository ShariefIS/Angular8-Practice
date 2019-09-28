import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HerosList } from './mock-heros';
import { HeroService } from '../hero.service';

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
  heros: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) {
    // console.log("constructor Called");
  }

  ngOnInit() {
    // console.log("ngOnInit Called");
    this.heros = HerosList;
    this.getHeros();
  }
  onSelect(heroparam: Hero): void {
    this.selectedHero = heroparam;
  }
  getHeros() {
    // before observable result
    // this.heros = this.heros.concat(this._heroService.getHeros());
    this._heroService.getHeros().subscribe((newHeroList) => {
      this.heros = this.heros.concat(newHeroList);
    });
  }
}
