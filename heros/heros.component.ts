import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  
hero : Hero ={
id: 1,
name: ''
};
heross = HEROS;
selectedHero ?: Hero;
onSelect(hero: Hero): void{
this.selectedHero = hero;
}
  constructor() { }

  ngOnInit(): void {
  }

}
