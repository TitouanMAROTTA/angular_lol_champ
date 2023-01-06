import { Component, OnInit } from '@angular/core';
import { ChampionService } from './services/champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-project-lol-champion';
  champions:any = [];  

  constructor(
    private Champion: ChampionService
  ) {}

  ngOnInit() {
    this.champions = this.Champion.champions;
  }

  boughtChampion() { 
    this.Champion.setBought();
  }

  notBoughtChampion() {
    this.Champion.setNotBought();
  }
}
