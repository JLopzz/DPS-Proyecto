import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';

//servicios
import { FirebaseService } from './services/firebase.service'

//paginas
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';

//componentes
import { HeaderComponent } from './components/header/header.component'
import { ForgetPwdComponent } from './components/forget-pwd/forget-pwd.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetPwdComponent,
    VerifyEmailComponent,
    AboutComponent,
    HeaderComponent,
    ClientesComponent,
    VisitasComponent,
    MascotasComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy 
    },
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
