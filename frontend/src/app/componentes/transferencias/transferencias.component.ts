import { TransferenciaService, Transferencia } from './../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

ListarTransferencias: Transferencia[];

  constructor(private transferenciaService: TransferenciaService, private router:Router) {
    this.ListarTransferencias = [];
   }

  ngOnInit() {
    this.listarTransferencias()
  }

  listarTransferencias() {
    this.transferenciaService.getTransferencia().subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.ListarTransferencias = <any>resultado;
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    });
  }

  excluir(id: any) {
    this.transferenciaService.deleteTransferencia(id).subscribe({
      next: (resultado) => {console.log('transferencia excluida com sucesso')
                            this.listarTransferencias()},
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })
  }

  editar(id:any){
    this.router.navigate(['edit/' + id])
  }

}
