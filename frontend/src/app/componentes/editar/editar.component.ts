import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Transferencia,
  TransferenciaService,
} from 'src/app/servicos/transferencia.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  transferencia: Transferencia = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: '',
  };

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id_entrada = <any>this.activatedRoute.snapshot.params['id']
    console.log(id_entrada);
    this.transferenciaService.getUmaTransferencia(id_entrada).subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.transferencia = resultado;
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('complete'),
    });
  }

  atualizar() {
    this.transferenciaService
      .editTransferencia(
        this.transferencia.id_transferencia,
        this.transferencia
      )
      .subscribe({
        next: (resultado) =>
          console.log('Transferencia alterada para ' + resultado),
        error: (erro) => console.error(erro),
        complete: () => console.info('complete'),
      });
    this.router.navigate(['/transferencias']);
  }
}
