import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DbzMainPageComponent} from "./page/main-page.component";
import { ListComponent } from './components/list/list.component';
import { DbzAddCharacterComponent } from './components/dbz-add-character/dbz-add-character.component';
import {Format} from "@angular-devkit/build-angular/src/builders/extract-i18n/schema";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    DbzAddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    DbzMainPageComponent,
  ]
})
export class DbzModule { }
