import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pacientes } from "../../models/models"

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss'],
})
export class VisitasComponent implements OnInit {

  newhistoriales: Pacientes[];

  constructor(
    public router : Router,
    private pacienteService : PacienteService
  ) { }
  

  ngOnInit(): void {
    this.obtenerHistoriales();
  }

  obtenerHistoriales() {
    this.pacienteService.getHistorial().subscribe((resp: Pacientes[]) => {
      this.newhistoriales = resp;
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
        this.router.navigate(['visitas', idpaciente]);
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
