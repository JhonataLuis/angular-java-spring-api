import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroResponse } from '../types/cadastro-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  cadastro(name: string, cep: string){
    return this.httpClient.post<CadastroResponse>("/cadastro", {name, cep}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
}
