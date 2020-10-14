import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {

  constructor(public router : Router) { }

  randomTitle='random'

  ngOnInit() {
    console.log(this.router.url)
  }


}

