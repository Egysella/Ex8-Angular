import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CEP } from 'src/model/cep-model';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  baseUrl: string="http://viacep.com.br/ws"
  constructor(private http: HttpClient) { }

  //metodo de buscar 
  buscar(cep: string): Observable<CEP>{
    return this.http.get<CEP>(`${this.baseUrl}/${cep}/json/`)
  }
}
