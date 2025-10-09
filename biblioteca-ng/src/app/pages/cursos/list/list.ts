import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CursoService } from '../../../services/curso.service';
import { CursoResponse } from '../../../models/curso.dtos';

@Component({
  selector: 'app-list',
  imports: [FormsModule, TableModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})

export class CursoList {
  cursos: CursoResponse[] = []
  
  constructor(
    private cursoService: CursoService
  ) { };

  ngOnInit() {
    this.carregarCursos();
  }

  private carregarCursos() {
    this.cursoService.getAll().subscribe({
      next: cursos => this.cursos = cursos,
      error: erro => {
        alert("Não foi possível carregar os cursos");
        console.error("Ocorreu um erro ao carregar os cursos: " + erro);
      }
    })
  }
}
