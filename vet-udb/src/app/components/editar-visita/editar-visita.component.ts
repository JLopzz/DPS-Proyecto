import { Component, OnInit, Input } from '@angular/core';
import { PacienteService } from '../../services/paciente.service'
import { ModalController } from '@ionic/angular'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-visita',
  templateUrl: './editar-visita.component.html',
  styleUrls: ['./editar-visita.component.scss'],
})
export class EditarVisitaComponent implements OnInit {
  
  expediente : any = {}
  mostrar = false ;
  
  @Input() set data (paramId:any){
    this.selectExpediente(paramId)
  }

  constructor(
    private pacienteService : PacienteService,
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {}

  selectExpediente(idhistorial) {
    this.pacienteService.seleccionarExpediente(idhistorial).subscribe( resp => {
      this.expediente = resp[0];
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  editarExpediente() {
    this.pacienteService.editarExpediente(this.expediente).subscribe( resp => {
      if ( resp['resultado'] === 'OK' ) {
        Swal.fire({
          icon: 'success',
          title: 'Expediente editado correctamente',
          showConfirmButton: false,
          timer: 2000
        });
        this.dismiss();
      }
    });
  }
}
