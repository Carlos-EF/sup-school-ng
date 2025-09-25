import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  selector: 'app-cadastro-professor',
  imports: [FormsModule],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.scss'
})
export class CadastroProfessorComponent {
  professores: Professor[];

  nomeCompleto: string = "";

  cpf: string = "";

  dataNascimento?: Date;

  geracao: string = "";

  cnpj: string = "";

  chavePix: string = "";

  nomeFantasia: string = "";

  valorHora?: number;

  celular: string = "";

  constructor(private router: Router) {
    this.professores = this.carregarProfessoresLocalStorage();
  }

  salvarProfessor(): void {
    let professor: Professor = {
      id: crypto.randomUUID(),
      nome: this.nomeCompleto,
      cpf: this.cpf,
      nascimento: this.dataNascimento!,
      cnpj: this.cnpj,
      pix: this.chavePix,
      fantasia: this.nomeFantasia,
      valor: this.valorHora!,
      celular: this.celular!
    };

    this.professores.push(professor);

    this.salvarProfessorLocalStorage();

    this.router.navigate(["/professores"]);
  };

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

  gerarGeracaoProfessor(geracao: string): string {
    let anoNascimentoProfessor = this.dataNascimento!.getFullYear();

    if (anoNascimentoProfessor >= 1946 && anoNascimentoProfessor <= 1964) {
      this.geracao = "Baby Boomer"
    } else if (anoNascimentoProfessor >= 1965 && anoNascimentoProfessor <= 1980) {
      this.geracao = "Geração X"
    } else if (anoNascimentoProfessor >= 1981 && anoNascimentoProfessor <= 1996) {
      this.geracao = "Millenial"
    } else if (anoNascimentoProfessor >= 1997 && anoNascimentoProfessor <= 2012) {
      this.geracao = "Geração Z"
    } else {
      this.geracao = "Geração Alfa"
    }

    return geracao;
  }
}
