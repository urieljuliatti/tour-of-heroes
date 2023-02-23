import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // A ideia do service é ser um singleton. Evitar que obtenhamos valores ou setemos nos componentes
  // O componente tem a missão de visualizar/exibir, não processar.
  // Observable que retorna uma lista de heroes para quando for feita uma chamada pro backend
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes.');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id= ${id}`)
    return of(hero)
  }
}
