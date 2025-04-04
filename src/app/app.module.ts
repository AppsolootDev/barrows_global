import { Segment } from './entity/segments';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { GamePageComponent } from './game-page/game-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { ResultsComponent } from './results/results.component';
import { spinReducer, metaReducerLocalStorage } from './spin-state-store/spin.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    GamePageComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    StoreModule.forRoot({ segmentEntries: spinReducer}, { metaReducers: [metaReducerLocalStorage]}),
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
