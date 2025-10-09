import { Component } from '@angular/core';
import { CursoEditarRequest } from '../../../models/curso.dtos';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../../services/curso.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class CursoEdit {
  form: CursoEditarRequest;

  id: number;

  constructor(
    private router: Router,
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = {
      nome: "",
      sigla: ""
    }

    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());
  }
  salvar() { }
}
