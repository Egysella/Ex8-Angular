import { Component, OnInit } from '@angular/core';
import { CEP } from 'src/model/cep-model';
import { CepService } from 'src/service/cep-service.service';

@Component({
  selector: 'app-cep-component',
  templateUrl: './cep-component.component.html',
  styleUrls: ['./cep-component.component.css']
})
export class CepComponentComponent implements OnInit {
  localidade: CEP | undefined   //criar variavel
  cepLocal: string = ''
  constructor(private cepService: CepService) { } // injeçao de dependencia do serviço
  
  //buscará o cep
  ngOnInit(): void {
    

  }
  buscar(cep: any){
    this.cepService.buscar(cep).subscribe((localEncontrado) => {
      this.localidade = localEncontrado
    })
  }
}
