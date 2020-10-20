import { Component, OnInit, Input } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.scss'],
})
export class ModificarClienteComponent{

  paciente:any = {}

  constructor(
    private pacienteService : PacienteService,
    private modalCtrl : ModalController,
    private router : Router
  ) { }

  @Input() set data (paramId:any){
    this.seleccionarPaciente(paramId)
  }

  seleccionarPaciente(idpaciente) {
    this.pacienteService.seleccionarPaciente(idpaciente).subscribe(resp => {
     this.paciente = resp[0];
    });
  }

  editarPaciente() {
    this.pacienteService.editarPaciente(this.paciente).subscribe(resp => {
      if (resp['resultado'] === 'OK') {
        Swal.fire({
          icon: 'success',
          title: '¡Paciente Editado Correctamente!',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['clientes'])
        this.dismiss()
      }
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
