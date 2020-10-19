import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pacientes } from '../../models/models'

@Component({
  selector: 'app-nueva-visita',
  templateUrl: './nueva-visita.component.html',
  styleUrls: ['./nueva-visita.component.scss'],
})
export class NuevaVisitaComponent implements OnInit {

  mostrar = false ;
  pacientes: Pacientes[];

  fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();

  newhistorial: any = {
    fechahistorial: this.fecha
  };

  constructor(
    private pacienteService: PacienteService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.pacienteService.getPaciente().subscribe( (resp: Pacientes[]) => {
      this.pacientes = resp;
      console.log(this.pacientes)
    });
  }

  AltaHistorial() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Desea registrar el nuevo historial?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Aceptar!',
      cancelButtonText: '¡Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.pacienteService.altaHistorial(this.newhistorial).subscribe( resp => {
          if ( resp['resultado'] === 'OK') {
            swalWithBootstrapButtons.fire(
              '¡Registrado!',
              '¡Se registró exitosamente!',
              'success'
            );
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
    });

  }

  VerExp( idpaciente: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Desea ver el expediente?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Aceptar!',
      cancelButtonText: '¡Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.route.navigate(['/expediente', idpaciente]);

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
    });
  }

}
