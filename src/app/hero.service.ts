import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HerosList2, HerosList } from './heroes/mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  // activeComp: string = "dashboard";
  // setActiveComponent(componentName: string) {
  //   this.activeComp = componentName;
  // }
  // getActiveComponent(): string {
  //   return this.activeComp;
  // }
  getHeros(): Observable<Hero[]> {
    return of(HerosList2);
  }
  getHero(id: number): Observable<Hero> {
    if (id < 6) {
      return of(HerosList.find(hero => hero.id === id));
    } else {
      return of(HerosList2.find(hero => hero.id === id));
    }
  }
}
