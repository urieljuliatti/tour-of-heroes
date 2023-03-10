import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService
    .getHeroes()
    .subscribe(heroes => {
      // Pegando 4 heróis
      this.heroes = heroes.slice(1, 5);
    })
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
