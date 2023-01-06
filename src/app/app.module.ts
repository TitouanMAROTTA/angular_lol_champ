import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { ChampionComponent } from './champion/champion.component';

// import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ChampionService } from './services/champion.service';
import { HomeComponent } from './services/home/home.component';
import { ChampionModifComponent } from './services/champion-modif/champion-modif.component';
import { ChampionNewComponent } from './services/champion-new/champion-new.component';
import { ChampionListComponent } from './services/champion-list/champion-list.component';
import { AppRoutingModule } from './services/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavBarComponent,
    ChampionComponent,
    HomeComponent,
    ChampionModifComponent,
    ChampionNewComponent,
    ChampionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [
    ChampionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
