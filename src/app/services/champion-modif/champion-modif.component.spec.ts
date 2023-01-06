import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionModifComponent } from './champion-modif.component';

describe('ChampionModifComponent', () => {
  let component: ChampionModifComponent;
  let fixture: ComponentFixture<ChampionModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
