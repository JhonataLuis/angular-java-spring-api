import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  cadastro(name: string, cep: string){
    return this.httpClient.post("/cadastro", {name, cep})
  }
}
