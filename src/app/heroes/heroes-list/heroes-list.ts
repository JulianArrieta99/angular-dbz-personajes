import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.html',
  styleUrls: ['./heroes-list.css']
})
export class HeroesList {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();

  }
}
