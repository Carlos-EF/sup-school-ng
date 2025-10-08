import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoResponse } from '../models/aluno.dtos';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  url = "https://api.franciscosensaulas.com/api/v1/escola/alunos";

  constructor (private httpClient: HttpClient) {

  }

  getAll(): Observable<AlunoResponse[]> {
    return this.httpClient.get<AlunoResponse[]>(this.url);
  }
}
