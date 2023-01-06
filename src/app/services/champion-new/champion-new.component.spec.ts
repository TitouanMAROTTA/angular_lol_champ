import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionNewComponent } from './champion-new.component';

describe('ChampionNewComponent', () => {
  let component: ChampionNewComponent;
  let fixture: ComponentFixture<ChampionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
