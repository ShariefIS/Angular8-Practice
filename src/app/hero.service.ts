import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HerosList2 } from './heroes/mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Observable<Hero[]> {
    return of(HerosList2);
  }
}
