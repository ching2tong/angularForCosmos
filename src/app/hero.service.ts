import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';

//Make sure this matches the number on the API when you run it, this is hardcoded in
//Also check to see if your API is on http or https and change the string below accordingly
const api = 'http://localhost:54896/api';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Array<Hero>>(`${api}/hero`);
  }

  deleteHero(hero: Hero) {
    return this.http.delete(`${api}/hero?uid=${hero.uid}`);
  }

  addHero(hero: Hero) {
    console.log("Trying to add Hero", hero, api)
    return this.http.post<Hero>(`${api}/hero/`, hero);
  }

  updateHero(hero: Hero) {
    return this.http.put<Hero>(`${api}/hero?uid=${hero.uid}`, hero);
  }
}
