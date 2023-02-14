import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // A ideia do service é ser um singleton. Evitar que obtenhamos valores ou setemos nos componentes
  // O componente tem a missão de visualizar/exibir, não processar.

  getHeroes(): Hero[]{
    return HEROES;
  }
}
