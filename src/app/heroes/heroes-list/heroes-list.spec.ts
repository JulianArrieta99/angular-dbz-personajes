import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesList } from './heroes-list';

describe('ListHeroesComponent', () => {
  let component: HeroesList;
  let fixture: ComponentFixture<HeroesList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesList]
    });
    fixture = TestBed.createComponent(HeroesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
