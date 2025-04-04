import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { LandingComponent } from './landing/landing.component';
import { ResultsComponent } from './results/results.component';

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
