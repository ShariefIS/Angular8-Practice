import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() heroDetail: Hero;

  constructor(private _heroService: HeroService
    , private _route: ActivatedRoute
    , private _location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this._route.snapshot.paramMap.get("id");
    this._heroService.getHero(id).subscribe((hero) => this.heroDetail = hero);
  }
  goBack(): void {
    this._location.back();
  }
}
