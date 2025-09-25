import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Professor {
  id: string,
  nome: string,
  cpf: string,
  nascimento: Date,
  cnpj: string,
  pix: string,
  fantasia: string,
  valor: number,
  celular: string
};



@Component({
  selector: 'app-lista-professores',
  imports: [RouterLink],
  templateUrl: './lista-professores.component.html',
  styleUrl: './lista-professores.component.scss'
})
export class ListaProfessoresComponent {
  professores: Professor[];

  constructor() {
    this.professores = this.carregarProfessoresLocalStorage();
  }

  salvarProfessorLocalStorage(): void {
    let professoresString = JSON.stringify(this.professores);

    localStorage.setItem("professores", professoresString);
  };

  carregarProfessoresLocalStorage(): Professor[] {
    let professoresLocalStorage = localStorage.getItem("professores");

    if (professoresLocalStorage === null) {
      return [];
    }

    let professores: Professor[] = JSON.parse(professoresLocalStorage);
    return professores;
  };

  apagarProfessor(professor: Professor): void {
    let indiceParaApagarProfessor = this.professores.indexOf(professor);

    this.professores.splice(indiceParaApagarProfessor, 1);

    this.salvarProfessorLocalStorage();
  };
}
