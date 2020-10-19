import { Component } from '@angular/core';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss'],
})
export class NuevoClienteComponent{

  pacientes: any = {} ;

  constructor(
    private pacientesService: PacienteService,
    private router: Router
  ) { }

  AltaPaciente() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Desea Registrar Al Paciente?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.altaPaciente(this.pacientes).subscribe(resp => {
          if ( resp['resultado'] === 'OK') {
            swalWithBootstrapButtons.fire(
              '¡Registrado!',
              '¡Paciente Registrado!',
              'success'
            );
        this.router.navigate(['nueva-visita']);
          }
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'Ups!',
          'error'
        );
      }
    } );
  }
}
