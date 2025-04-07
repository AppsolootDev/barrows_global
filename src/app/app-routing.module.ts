import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './page/game-page/game-page.component';
import { LandingComponent } from './page/landing/landing.component';
import { ResultsComponent } from './page/results/results.component';

const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'game', component: GamePageComponent },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
