import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion-modif',
  templateUrl: './champion-modif.component.html',
  styleUrls: ['./champion-modif.component.css']
})
export class ChampionModifComponent implements OnInit {
  champion:any;
  constructor(
    private Champion: ChampionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.champion = this.Champion.getChampionById(id);
  }

}
