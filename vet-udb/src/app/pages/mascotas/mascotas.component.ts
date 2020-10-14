import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FirebaseService } from '../../services/firebase.service'
import { Cliente } from '../../models/models'

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})
export class MascotasComponent implements OnInit {

 
  constructor(
    public router : Router,
    private db : FirebaseService
  ) { }
  
  //variable que recibe la info desde firebase
  data : any

  //informacion de prueba, genera una variable a partir de la interfaz cliente que viene de models
  cltPrueba : Cliente

  //que hace al iniciarse el componente
  ngOnInit() {
    this.updateData()
  }

  //imprimir informacion que hay en variable data en consola
  getData(){
    console.log(this.data)
  }

  //obtenemos desde el servicio de firebase
  updateData(){
    this.db.getClientes()   //con esta linea se ejecuta la funcion del servicio
    .subscribe(res=>{       //extraemos la info que trae la ejecucion
      this.data = res.map(item => {   //asignamos cada uno de los datos a el arreglo de this.data 
        return { 
          id: item.payload.doc.id,    //asignacion del id
          ...item.payload.doc.data()  //asignacion de los demas datos
        }
      });
    })
  }


  //creacion de un nuevo documento (nuevo cliente en )
  nuevoCliente(){
    //data de prueba, firebase genera automatico el id
    this.cltPrueba = {
      nombre : "Gerardo Lopez",
      dui: "23456789",
      mascotas:[
        {
          nombre:"sombra",
          edad:"13"
        }
      ],
      visitas:[]
    } 

    this.db.AddCliente(this.cltPrueba)  //ejecucion de funcion de firebase para creacion (recibe el arreglo de cliente)
    .then(()=>this.updateData())        //luego se ejecuta la funcion updateData(), para obtener los de nuevo los registros disponibles
    .then(()=>this.getData())           //imprimimos en consola con la funcion getData()
  }


  //eliminacion de registro
  deleteData(){
    //data de prueba, para eliminar alguna, tomar el id de home
    this.cltPrueba = {
      id:"1uvmRFd38uUjvEzBmi9J",/**Cambiar por alguno de los disponibles en home **/
      nombre : "Gerardo Lopez",
      dui: "23456789",
      mascotas:[
        {
          nombre:"sombra",
          edad:"13"
        }
      ],
      visitas:[]
    }
    this.db.DeleteCliente(this.cltPrueba) //ejecucion de funcion de firebase para eliminacion (recibe el arreglo de cliente)
    .then(()=>this.updateData())          //luego se ejecuta la funcion updateData(), para obtener los de nuevo los registros disponibles
    .then(()=>this.getData())             //imprimimos en consola con la funcion getData()
  }
}
