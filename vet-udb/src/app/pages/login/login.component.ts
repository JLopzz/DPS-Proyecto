import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ForgetPwdComponent } from '../../components/forget-pwd/forget-pwd.component'
import { SignupComponent } from "../../components/signup/signup.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private fireAuth: FirebaseService,
    private router: Router,
    private modalCtl : ModalController
  ) { }

  showPass = false
  userPwd : string
  userMail : string

  ngOnInit() {}

  togglePass(){
    this.showPass = !this.showPass
  }

  console(data){
    console.log(data)
  }

  googleLogin(){
    this.fireAuth.GoogleAuth().then(()=>{
      if(this.fireAuth.isLoggedIn) this.router.navigate(['clientes'])
    })
  }

  normalLogin(){
    this.fireAuth.SignIn(this.userMail,this.userPwd).then(()=>{
      if(this.fireAuth.isLoggedIn) this.router.navigate(['clientes'])
    })
  }

  async forgetPass(){
    const modal = await this.modalCtl.create({
      component: ForgetPwdComponent
    })
    return await modal.present();
  }

  async signUp(){
    const modal = await this.modalCtl.create({
      component: SignupComponent
    })
    return await modal.present();
  }
}
