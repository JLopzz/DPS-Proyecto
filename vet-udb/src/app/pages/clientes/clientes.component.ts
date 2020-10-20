import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Pacientes } from '../../models/models';
import Swal from 'sweetalert2';
import { ModificarClienteComponent } from '../../components/modificar-cliente/modificar-cliente.component'
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit{
  
  // Obtener la lista de pacientes
  pacientes: Pacientes[];
  paciente: any = {};
  filtrarNombre: any = "";
  p: number = 1;

  constructor(
    public pacienteService: PacienteService,
    public modalCont : ModalController
  ) { }
 
  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.pacienteService.getPaciente().subscribe((resp: Pacientes[]) => {
      this.pacientes = resp;
    });
  }

  async openModal(id){
    const modal = await this.modalCont.create({
      component: ModificarClienteComponent,
      componentProps:{
        'data' : id
      }
    })
    modal.onDidDismiss().then(() => this.obtenerPacientes())
    return await modal.present();
  }

 
  EliminarPaciente(idpaciente) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Desea Eliminar Al Paciente?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacienteService.eliminarPaciente(idpaciente).subscribe(resp => {
          if ( resp['resultado'] === 'OK') {
            swalWithBootstrapButtons.fire(
              '¡Paciente Eliminado!',
              'Haga Click Para Continuar',
              'success'
            );
            this.obtenerPacientes();
          }
        });
      } else if ( result.dismiss === Swal.DismissReason.cancel ) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'Ups!',
          'error'
        );
      }
    });
  }
}

