import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '' ,redirectTo: 'pokemons', pathMatch: "full" },
  { path: '**' ,component: PageNotFoundComponent}
  //** intercepte tous les chemins de l'application=> c'est pourquoi khassaha tji akhir wahda sinon j'aurai une grande erreur
  //on laisse ici que les routes global
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
