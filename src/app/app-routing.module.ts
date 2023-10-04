import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
const routes: Routes = [
  { path: GamesComponent.routeName, component: GamesComponent },
  { path: DashboardComponent.routeName, component: DashboardComponent },
  { path: GameDetailComponent.routeName, component: GameDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
