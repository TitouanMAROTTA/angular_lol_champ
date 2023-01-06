import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  @Input() championName: string = '';
  @Input() championId: number = -1;
  @Input() championMainLogo: string = '';

  @Input() championBought: boolean = false;

  @Input() championBoughtLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png?20190929063108';
  @Input() championNotBoughtLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/1200px-Red_x.svg.png';
  
  @Input() championHPLogo: string = 'https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Health_icon.png';
  @Input() championMPLogo: string = 'https://static.wikia.nocookie.net/leagueoflegends/images/8/8b/Mana_icon.png';
  @Input() championADLogo: string = 'https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Attack_damage_icon.png';
  @Input() championARLogo: string = 'https://static.wikia.nocookie.net/leagueoflegends/images/1/13/Range_icon.png';
  @Input() championMSLogo: string = 'https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Movement_speed_icon.png';

  @Input() championHP: string = '';
  @Input() championMP: string = '';
  @Input() championAD: string = '';
  @Input() championAR: string = '';
  @Input() championMS: string = '';

  @Input() championDeleted: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onBoughtChampion(){
    if(this.championBought == true){
      console.log('Vous venez de vendre ' + this.championName + ' !');
      this.championBought = false;
    }
    else{
      console.log('Vous venez d\'acheter ' + this.championName + ' !');
      this.championBought = true;
    }
  }

  deleteChampion(){
    this.championDeleted = true;
  }


}
