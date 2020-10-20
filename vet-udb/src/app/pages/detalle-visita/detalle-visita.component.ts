import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { Historial } from 'src/app/models/models';
import Swal from 'sweetalert2'; 
import { ModalController } from "@ionic/angular"
import { EditarVisitaComponent } from '../../components/editar-visita/editar-visita.component'
import { VerVisitaComponent } from '../../components/ver-visita/ver-visita.component'

@Component({
  selector: 'app-detalle-visita',
  templateUrl: './detalle-visita.component.html',
  styleUrls: ['./detalle-visita.component.scss'],
})
export class DetalleVisitaComponent implements OnInit {

  exp: Historial[] = [];
  expedientes: any = {};
  expediente: any = {};
  mostrar: boolean = false;
  
  constructor(
    private pacienteService: PacienteService,
    private activatedRoute: ActivatedRoute,
    private modalCtl : ModalController
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.expedientes = params['id'];
    });
  }

  ngOnInit(): void {
    this.obtenerExpediente();
  }

  obtenerExpediente() {
    this.pacienteService.getExpedientes(this.expedientes).subscribe( (resp: Historial[]) => {
      this.exp = resp;
    });
  }

  seleccionarExpediente(idhistorial) {
    this.pacienteService.seleccionarExpediente(idhistorial).subscribe( resp => {
      this.expediente = resp[0];
    });
  }

  seleccionarReceta(idhistorial) {
    this.pacienteService.seleccionarRecetaPDF(idhistorial);
  }

  async modalEditar(paramId: any){
    const modal = await this.modalCtl.create({
      component: EditarVisitaComponent,
      componentProps:{ 'data' : paramId }
    })
    modal.onDidDismiss().then(()=>{
      this.obtenerExpediente()
    })
    return await modal.present();
  }
  async modalVer(paramId: any){
    const modal = await this.modalCtl.create({
      component: VerVisitaComponent,
      componentProps:{ 'data' : paramId }
    })
    return await modal.present();
  }
}
