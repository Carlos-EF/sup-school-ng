import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { EmprestimoEditarRequest } from '../../../models/emprestimo.dtos';
import { EmprestimosService } from '../../../services/emprestimos.service';
import { LivroResponse } from '../../../models/livro.dtos';
import { UsuarioResponse } from '../../../models/usuario.dtos';
import { LivroService } from '../../../services/livro.service';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-edit',
  imports: [
    ButtonModule,
    DatePickerModule,
    SelectModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class EmprestimoEdit {
  form: EmprestimoEditarRequest;

  id: number;

  livros: LivroResponse[] = [];

  usuarios: UsuarioResponse[] = [];

  constructor(
    private emprestimoService: EmprestimosService,
    private livroService: LivroService,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = {
      livroId: null,
      usuarioId: null,
      dataDevolucao: null,
      dataEmprestimo: null,
      status: ""
    }

    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.carregarEmprestimo();
  }

  private carregarEmprestimo() {
    this.emprestimoService.getById(this.id).subscribe({
      next: emprestimo => {
        this.form.livroId = emprestimo.livroId
        this.form.usuarioId = emprestimo.usuarioId
        this.form.status = emprestimo.status
        this.form.dataDevolucao = new Date(emprestimo.dataDevolucao!)
        this.form.dataEmprestimo = new Date(emprestimo.dataEmprestimo!)
      }
    })
  }

  ngOnInit() {
    this.carregarLivros();

    this.carregarUsuarios();
  }

  private carregarLivros() {
    this.livroService.getAll().subscribe({
      next: livros => {
        const livrosOdernados = livros.sort((a, b) => a.titulo.localeCompare(b.titulo));
        this.livros = livrosOdernados;
      },
      error: erro => {
        alert("Ocorreu um erro ao tentar carregar a lista de livros.");
        console.error("Ocorreu um erro ao tentar carregar a lista de livros: " + erro);
      }
    })
  }

  private carregarUsuarios() {
    this.usuarioService.getAll().subscribe({
      next: usuarios => {
        const usuariosOdernados = usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
        this.usuarios = usuariosOdernados;
      },
      error: erro => {
        alert("Ocorreu um erro ao tentar carregar a lista de usuários.");
        console.error("Ocorreu um erro ao tentar carregar a lista de usuarios: " + erro);
      }
    })
  }

  salvar() {
    this.emprestimoService.update(this.id, this.form).subscribe ({
      next: sucesso => this.router.navigate(["/emprestimos"]),
      error: erro => {
        alert("Não foi possível atualizar o empréstimo.");
        console.error("Ocorreu um erro ao tentar atualizar o empréstimo: " + erro);
      }
    })
  }
}
