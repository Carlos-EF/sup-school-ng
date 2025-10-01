import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type TipoPokemon =
  | "Normal"
  | "Fogo"
  | "Água"
  | "Elétrico"
  | "Planta"
  | "Gelo"
  | "Lutador"
  | "Venenoso"
  | "Terrestre"
  | "Voador"
  | "Psíquico"
  | "Inseto"
  | "Pedra"
  | "Fantasma"
  | "Dragão"
  | "Sombrio"
  | "Aço"
  | "Fada";


@Component({
  selector: 'card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  // ng g c card
  @Input() imagem!: string;
  @Input() nome!: string;
  @Input() numero!: number;
  @Input() tipo!: TipoPokemon;

  onlyPlainChars(input: string): string {
    if (input == null) return "";
    // 1) Normaliza e remove diacríticos (acentos)
    let s = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // 2) Remove tudo que não for letra ou número
    s = s.replace(/[^A-Za-z0-9]+/g, "");
    return s.toLowerCase();
  }

}
