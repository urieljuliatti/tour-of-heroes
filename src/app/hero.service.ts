import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // A ideia do service é ser um singleton. Evitar que obtenhamos valores ou setemos nos componentes
  // O componente tem a missão de visualizar/exibir, não processar.
  
  constructor() { }
}
