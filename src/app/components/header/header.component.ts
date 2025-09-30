import { Component } from '@angular/core';
import { NavbarComponent, NavbarMenu } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
menus: NavbarMenu[];

  constructor() {
    this.menus = [
      { link: "calculadora", titulo: "Calculadora" },
      { link: "lista-pessoas", titulo: "Lista de Pessoas" },
      { link: "calculadora-retangulo", titulo: "Calcular Retângulo" },
      { link: "calculadora-media", titulo: "Calcular Média" },
      { link: "calculadora-temperatura", titulo: "Calcular Temperatura" },
      { link: "lista-tarefas", titulo: "Lista de Tarefas" },
      { link: "alunos", titulo: "Alunos" },
      { link: "turmas", titulo: "Turmas" },
      { link: "materias", titulo: "Matérias" },
      { link: "professores", titulo: "Professores" }
    ]
  }
}
