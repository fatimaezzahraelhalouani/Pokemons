import { Component}  from '@angular/core';


//Je pense hnaya kandiro nom de la classe et pas le nom du fichier

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

  //template: ` <h1>Liste de Pokemons</h1> `,
  //c'est la vue 
})
export class AppComponent  {}
//implements OnInit //c'est la classe du composent

  //Fach dert : erah dert typage à mon pokemonList
  // Le core du constructeur khasso ikoun khawi

 /* ngOnInit() {
  console.table(this.pokemonList);  

  }*/

  /*selectPokemon(pokemonId: string)
  {
    const pokemon : Pokemon | undefined = this.pokemonList.find (pokemon => pokemon.id == +pokemonId);
 

    if(pokemon)
    {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
   
    else
    {
      console.log(`Vous avez demandé un pokemon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }

    //les bactiques `` homa li kaykhaliwba mansta3mlouch
    // + pour concaténation donc kay3tiwna syntax plus elegant
    //fach kandiro console.log donc kan affichiw f log diyal console à partie fe F12
  }*/
