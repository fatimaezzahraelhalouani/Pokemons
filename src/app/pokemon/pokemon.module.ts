import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';


const PokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id' ,component: EditPokemonComponent },
  { path: 'pokemons' ,component: ListPokemonComponent },
  { path: 'pokemon/:id' ,component: DetailPokemonComponent },
  //hna f l module diyalna tandiro les routes spécifiques
];


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PokemonRoutes),
    FormsModule
  ]
})
export class PokemonModule { }
