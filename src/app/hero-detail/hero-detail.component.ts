import { Component, Input } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent {
  // Decorator para injetar a variavel do outro componente (heroes.component.ts)
  // Assim sendo, a propriedade pode ser enxergada de fora
  @Input() hero?: Hero;
}
