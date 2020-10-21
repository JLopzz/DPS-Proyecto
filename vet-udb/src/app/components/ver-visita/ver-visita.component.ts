import { Component, OnInit, Input } from '@angular/core';
import { PacienteService } from '../../services/paciente.service'
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-ver-visita',
  templateUrl: './ver-visita.component.html',
  styleUrls: ['./ver-visita.component.scss'],
})
export class VerVisitaComponent implements OnInit {

  expediente : any = {}
  mostrar = false ;
  
  @Input() set data (paramId:any){
    console.log(paramId)
    this.seleccionarExpediente(paramId)
  }


  constructor(
    private pacienteService: PacienteService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  seleccionarExpediente(idhistorial) {
    this.pacienteService.seleccionarExpediente(idhistorial).subscribe( resp => {
      this.expediente = resp[0];
      console.log(this.expediente);
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
