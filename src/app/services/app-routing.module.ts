import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ChampionComponent } from '../champion/champion.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionModifComponent } from './champion-modif/champion-modif.component';
import { ChampionNewComponent } from './champion-new/champion-new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'champions',
    component: ChampionListComponent
  }, {
    path: 'new',
    component: ChampionNewComponent
  }, {
    path: 'modif/:id',
    component: ChampionModifComponent
  },{
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  // declarations: [
  //   AppComponent,
  //   ChampionComponent,
  //   ChampionModifComponent,
  //   ChampionNewComponent,
  //   HomeComponent,
  //   ChampionListComponent,
  // ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }