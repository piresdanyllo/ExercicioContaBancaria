import { TransferenciaService, Transferencia } from 'src/app/servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  transferencia: Transferencia = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: ''
  }

  constructor(private transferenciaService: TransferenciaService, private router: Router ) { }

  ngOnInit() {
  }

  adicionar(){
    delete this.transferencia.id_transferencia

    this.transferenciaService.addTransferencia(this.transferencia).subscribe({
      next: (resultado) => console.log('transferencia cadastrada com sucesso'),
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    });

    this.router.navigate(['/transferencias'])
  }

}
