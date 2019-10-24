import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poke-list', component: PokeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
