import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResponse } from '../models/usuario.dtos';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/usuarios";

  constructor(private httpClient: HttpClient) { };

  getAll(): Observable<UsuarioResponse[]> {
    return this.httpClient.get<UsuarioResponse[]>(this.url);
  }
}
