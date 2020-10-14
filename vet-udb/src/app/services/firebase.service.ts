import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import { 
  AngularFirestore, 
  AngularFirestoreDocument,
  AngularFirestoreCollection 
} from '@angular/fire/firestore'

import { Router } from "@angular/router"

import { Cliente } from '../models/models'

@Injectable({ 
  providedIn: 'root'
})
export class FirebaseService {

  //referencia a la coleccion de clientes que esta en DB de firebase
  private clientColl: AngularFirestoreCollection<Cliente>;

  userData : any

  constructor(
    public afStore : AngularFirestore,
    public afAuth : AngularFireAuth,
    public router : Router,
    public ngZone : NgZone
  ) {
    this.afAuth.authState.subscribe( user => {
      if(user){
        this.userData = user
        localStorage.setItem('user',JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user'))
      } else{
        localStorage.setItem('user', null)
        JSON.parse(localStorage.getItem('user'))
      }
    })
  }

  /** Para el acceso a la base de datos **/

  //obtencion de clientes
  getClientes() {
    //referencia a la coleccion
    this.clientColl = this.afStore.collection<Cliente>('clientes');
    //obtenemos los daros de la coleccion
    return this.clientColl.snapshotChanges()
  }


  AddCliente(_cliente: Cliente) {
    //de esta forma se especifica el id que se utilizara que en este caso es el 10
    return this.clientColl.add(_cliente);

  }
  DeleteCliente(_alumno: Cliente) {
    return this.clientColl.doc(_alumno.id).delete();
  }

  UpdateCliente(_cliente: Cliente) {
    return this.clientColl.doc(_cliente.id).update(_cliente);
  }

  /** Para  el inicio de sesion **/
  sessionInit( email:string, pass:string ){
    return this.afAuth.signInWithEmailAndPassword(email,pass)
      .then(res=>{
        this.ngZone.run(()=>{
          this.router.navigate(['dashboard'])
        })
        this.setUserData(res.user)
      })
      .catch(err => {
        window.alert(err.message)
      })
  }

  SignUp(email:string, pass:string){
    return this.afAuth.createUserWithEmailAndPassword(email,pass)
      .then(res => {
        this.SendVerificationMail();
        this.setUserData(res.user)
      })
      .catch(err => {
        window.alert(err.message)
      })
  }

  SendVerificationMail(){
    return this.afAuth.currentUser
      .then(u => {
        u.sendEmailVerification();
      })
      .then(() => {
        this.router.navigate(['verify-email-addres'])
      })
  }

  ForgotPassword(email) {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        window.alert('Se ha enviado el correo de restauracion de contraseña')
      })
      .catch(err => {
        window.alert(err)
      })
  }

  GoogleAuth() {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard'])
        })
        this.setUserData(res.user)
      })
      .catch(err => {
        window.alert(err)
      })
  }

  setUserData( user ) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`)
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, { merge: true })
  }

  SignOut(){
    return this.afAuth.signOut()
    .then(() => {
      localStorage.setItem('user', null)
      localStorage.removeItem('user')
      this.router.navigate(['sign-in'])
    })
  }
  
  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user'))
    return (user !== null && user.emailVerified !==  false) ? true : false
  }
}
