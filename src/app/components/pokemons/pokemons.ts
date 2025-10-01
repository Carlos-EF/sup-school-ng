import { Component } from '@angular/core';
import { Card, TipoPokemon } from '../card/card';
import { FormsModule } from '@angular/forms';

export interface Pokemon {
  numero: number;
  imagem: string;
  nome: string;
  tipo: TipoPokemon;
}

const pokemons: Pokemon[] = [
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
    "numero": 1,
    "nome": "bulbasaur",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",
    "numero": 2,
    "nome": "ivysaur",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
    "numero": 3,
    "nome": "venusaur",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    "numero": 4,
    "nome": "charmander",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",
    "numero": 5,
    "nome": "charmeleon",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",
    "numero": 6,
    "nome": "charizard",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
    "numero": 7,
    "nome": "squirtle",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png",
    "numero": 8,
    "nome": "wartortle",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png",
    "numero": 9,
    "nome": "blastoise",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png",
    "numero": 10,
    "nome": "caterpie",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png",
    "numero": 11,
    "nome": "metapod",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png",
    "numero": 12,
    "nome": "butterfree",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png",
    "numero": 13,
    "nome": "weedle",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png",
    "numero": 14,
    "nome": "kakuna",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png",
    "numero": 15,
    "nome": "beedrill",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png",
    "numero": 16,
    "nome": "pidgey",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
    "numero": 17,
    "nome": "pidgeotto",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png",
    "numero": 18,
    "nome": "pidgeot",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png",
    "numero": 19,
    "nome": "rattata",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png",
    "numero": 20,
    "nome": "raticate",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png",
    "numero": 21,
    "nome": "spearow",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png",
    "numero": 22,
    "nome": "fearow",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png",
    "numero": 23,
    "nome": "ekans",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png",
    "numero": 24,
    "nome": "arbok",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
    "numero": 25,
    "nome": "pikachu",
    "tipo": "Elétrico"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png",
    "numero": 26,
    "nome": "raichu",
    "tipo": "Elétrico"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png",
    "numero": 27,
    "nome": "sandshrew",
    "tipo": "Terrestre"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png",
    "numero": 28,
    "nome": "sandslash",
    "tipo": "Terrestre"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png",
    "numero": 29,
    "nome": "nidoran♀",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png",
    "numero": 30,
    "nome": "nidorina",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png",
    "numero": 31,
    "nome": "nidoqueen",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/032.png",
    "numero": 32,
    "nome": "nidoran♂",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/033.png",
    "numero": 33,
    "nome": "nidorino",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/034.png",
    "numero": 34,
    "nome": "nidoking",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/035.png",
    "numero": 35,
    "nome": "clefairy",
    "tipo": "Fada"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/036.png",
    "numero": 36,
    "nome": "clefable",
    "tipo": "Fada"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png",
    "numero": 37,
    "nome": "vulpix",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png",
    "numero": 38,
    "nome": "ninetales",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png",
    "numero": 39,
    "nome": "jigglypuff",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/040.png",
    "numero": 40,
    "nome": "wigglytuff",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/041.png",
    "numero": 41,
    "nome": "zubat",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/042.png",
    "numero": 42,
    "nome": "golbat",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/043.png",
    "numero": 43,
    "nome": "oddish",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/044.png",
    "numero": 44,
    "nome": "gloom",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/045.png",
    "numero": 45,
    "nome": "vileplume",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/046.png",
    "numero": 46,
    "nome": "paras",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/047.png",
    "numero": 47,
    "nome": "parasect",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/048.png",
    "numero": 48,
    "nome": "venonat",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/049.png",
    "numero": 49,
    "nome": "venomoth",
    "tipo": "Inseto"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png",
    "numero": 50,
    "nome": "diglett",
    "tipo": "Terrestre"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/051.png",
    "numero": 51,
    "nome": "dugtrio",
    "tipo": "Terrestre"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png",
    "numero": 52,
    "nome": "meowth",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/053.png",
    "numero": 53,
    "nome": "persian",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png",
    "numero": 54,
    "nome": "psyduck",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/055.png",
    "numero": 55,
    "nome": "golduck",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/056.png",
    "numero": 56,
    "nome": "mankey",
    "tipo": "Lutador"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/057.png",
    "numero": 57,
    "nome": "primeape",
    "tipo": "Lutador"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png",
    "numero": 58,
    "nome": "growlithe",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png",
    "numero": 59,
    "nome": "arcanine",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png",
    "numero": 60,
    "nome": "poliwag",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/061.png",
    "numero": 61,
    "nome": "poliwhirl",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/062.png",
    "numero": 62,
    "nome": "poliwrath",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/063.png",
    "numero": 63,
    "nome": "abra",
    "tipo": "Psíquico"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/064.png",
    "numero": 64,
    "nome": "kadabra",
    "tipo": "Psíquico"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png",
    "numero": 65,
    "nome": "alakazam",
    "tipo": "Psíquico"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png",
    "numero": 66,
    "nome": "machop",
    "tipo": "Lutador"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/067.png",
    "numero": 67,
    "nome": "machoke",
    "tipo": "Lutador"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png",
    "numero": 68,
    "nome": "machamp",
    "tipo": "Lutador"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/069.png",
    "numero": 69,
    "nome": "bellsprout",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/070.png",
    "numero": 70,
    "nome": "weepinbell",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/071.png",
    "numero": 71,
    "nome": "victreebel",
    "tipo": "Planta"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/072.png",
    "numero": 72,
    "nome": "tentacool",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/073.png",
    "numero": 73,
    "nome": "tentacruel",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/074.png",
    "numero": 74,
    "nome": "geodude",
    "tipo": "Pedra"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/075.png",
    "numero": 75,
    "nome": "graveler",
    "tipo": "Pedra"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/076.png",
    "numero": 76,
    "nome": "golem",
    "tipo": "Pedra"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/077.png",
    "numero": 77,
    "nome": "ponyta",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/078.png",
    "numero": 78,
    "nome": "rapidash",
    "tipo": "Fogo"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/079.png",
    "numero": 79,
    "nome": "slowpoke",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/080.png",
    "numero": 80,
    "nome": "slowbro",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/081.png",
    "numero": 81,
    "nome": "magnemite",
    "tipo": "Elétrico"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/082.png",
    "numero": 82,
    "nome": "magneton",
    "tipo": "Elétrico"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/083.png",
    "numero": 83,
    "nome": "farfetch’d",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/084.png",
    "numero": 84,
    "nome": "doduo",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/085.png",
    "numero": 85,
    "nome": "dodrio",
    "tipo": "Normal"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/086.png",
    "numero": 86,
    "nome": "seel",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/087.png",
    "numero": 87,
    "nome": "dewgong",
    "tipo": "Água"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/088.png",
    "numero": 88,
    "nome": "grimer",
    "tipo": "Venenoso"
  },
  {
    "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/089.png",
    "numero": 89,
    "nome": "muk",
    "tipo": "Venenoso"
  }
]

@Component({
  selector: 'app-pokemons',
  imports: [Card, FormsModule],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.scss'
})
export class Pokemons {
  pesquisa: string = "";


  pokemonsApresentar: Pokemon[] = pokemons;

  filtrar() {
    this.pokemonsApresentar = pokemons
      .filter(pokemon => pokemon.nome.toLowerCase().includes(this.pesquisa.toLowerCase()))
  }

}
