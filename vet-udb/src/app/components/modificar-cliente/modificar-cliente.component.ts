import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Pacientes } from '../../models/models';
import Swal from 'sweetalert2';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.scss'],
})
export class ModificarClienteComponent implements OnChanges {

  paciente:any

  constructor(
    private pacienteService : PacienteService,
    private modalCtrl : ModalController
  ) { }

  
  @Input() set data (value:any){
    console.log(value)
    this.seleccionarPaciente(value)
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes.props)
  }

  seleccionarPaciente(idpaciente) {
    this.pacienteService.seleccionarPaciente(idpaciente).subscribe(resp => {
     this.paciente = resp[0];
    });
  }

  editarPaciente() {
    this.pacienteService.editarPaciente(this.paciente).subscribe(resp => {
     // tslint:disable-next-line: no-string-literal
     if (resp['resultado'] === 'OK') {
       Swal.fire({
         icon: 'success',
         title: '¡Paciente Editado Correctamente!',
         showConfirmButton: false,
         timer: 2000
       });
       this.dismiss()
     }
    });
  }

  showData(){
    console.log(this.paciente)
    this.dismiss()
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
