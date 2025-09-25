import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Turma {
  id: string,
  nome: string,
  sigla: string
}

@Component({
  selector: 'app-cadastro-turmas',
  imports: [FormsModule],
  templateUrl: './cadastro-turmas.component.html',
  styleUrl: './cadastro-turmas.component.scss'
})

export class CadastroTurmasComponent {
  turmas: Turma[];

  nome: string = "";

  sigla: string = "";

  constructor(private router: Router) {
    this.turmas = this.carregarTurmasLocalStorage();
  };

  salvarTurma(): void {
    if (this.nome === "" && this.sigla === "") {
      alert("Por favor preencha os campos necessários.");
    } else if (this.sigla === "") {
      alert("Por favor preencha o campo com a sigla da turma.");
    } else if (this.nome === "") {
      alert("Por favor preencha o campo com o nome da turma.");
    } else {
      let turma: Turma = {
        id: crypto.randomUUID(),
        nome: this.nome!,
        sigla: this.sigla!
      };

      this.turmas.push(turma);

      this.salvarTurmaLocalStorage();

      this.router.navigate(["/turmas"]);
    };
  };

  salvarTurmaLocalStorage(): void {
    let turmaString = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmaString);
  };

  carregarTurmasLocalStorage(): Turma[] {
    let turmasLocalStorage = localStorage.getItem("turmas");

    if (turmasLocalStorage === null) {
      return [];
    };

    let turmas: Turma[] = JSON.parse(turmasLocalStorage);
    return turmas;
  };
};
