import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HeroComponent} from "./hero/hero.component";
import {HeroesList} from "./heroes-list/heroes-list";

@NgModule({
  declarations:[
    HeroComponent,
    HeroesList,
  ],
  imports:[
    CommonModule,
  ],
  exports: [
    HeroComponent,
    HeroesList,
  ]

})
export class HeroesModule{}
