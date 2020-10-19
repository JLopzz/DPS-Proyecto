import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular"
import { SignupComponent } from "../../components/signup/signup.component"
import { FirebaseService } from "../../services/firebase.service"
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.scss'],
})
export class ForgetPwdComponent implements OnInit {

  userMail : string

  constructor(
    private modalCtl : ModalController,
    private fireAuth : FirebaseService
  ) { }

  ngOnInit() {}

  closeModal(){ this.modalCtl.dismiss({'dismiss':true}) }

  
  async signUp(){
    this.closeModal()
    
    const modal = await this.modalCtl.create({
      component: SignupComponent
    })
    return await modal.present();
  }

  getPassword(){
   this.fireAuth.ForgotPassword(this.userMail).then(()=>{
      Swal.fire({
        title:"Correo Enviado",
        text:"Se ha enviado un correo de recuperacion, revisa tu bandeja de Entrada",
        confirmButtonText:"Reenviar correo",
        cancelButtonText:"Entiendo",
        showCancelButton: true
      }).then(res =>{
        if(res.isConfirmed) this.getPassword()
        else this.modalCtl.dismiss({'dismiss' : true})
      })
   })
  }

}
