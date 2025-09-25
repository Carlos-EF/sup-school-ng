import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Materia {
  id: string,
  nome: string
};

@Component({
  selector: 'app-cadastro-materia',
  imports: [FormsModule],
  templateUrl: './cadastro-materia.component.html',
  styleUrl: './cadastro-materia.component.scss'
})

export class CadastroMateriaComponent {
  materias: Materia[];

  materia: string = "";

  constructor(private router: Router) {
    this.materias = this.carregarMateriasLocalStorage();
  }

  cadastrar(): void {
    if (this.materia === "") {
      alert("Por favor preencha o nome da matéria.");
    } else {
      let materia: Materia = {
        id: crypto.randomUUID(),
        nome: this.materia
      }

      this.materias.push(materia);

      this.salvarTurmaLocalStorage();

      this.router.navigate(["/materias"]);
    }
  }

  salvarTurmaLocalStorage(): void {
    let materiasString = JSON.stringify(this.materias);

    localStorage.setItem("materias", materiasString);
  };

  carregarMateriasLocalStorage(): Materia[] {
    let materiasLocalStorage = localStorage.getItem("materias");

    if (materiasLocalStorage === null) {
      return [];
    }

    let materias: Materia[] = JSON.parse(materiasLocalStorage);
    return materias;
  }
}
