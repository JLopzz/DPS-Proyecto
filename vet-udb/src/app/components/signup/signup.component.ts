import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular"
import { FirebaseService } from "../../services/firebase.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  
  showPass = false
  userPwd : string
  userMail : string

  constructor(
    private modalCtl: ModalController,
    private fireAuth: FirebaseService,
    private router: Router
  ) { }

  ngOnInit( ) {
    console.log(this.fireAuth)
  }

  closeModal(){ this.modalCtl.dismiss({'dismiss' : true}) }

  createAccount(){
    this.fireAuth.SignUp(this.userMail,this.userPwd).then(()=>{
      this.fireAuth.SignIn(this.userMail,this.userPwd).then(()=>{
        if(this.fireAuth.isLoggedIn) this.router.navigate(['clientes'])
      })
    })
  }
}
