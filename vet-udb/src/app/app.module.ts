import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

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

//pipes
import { FiltrartablaPipe } from './pipes/filtrartabla.pipe';

//pagination
import {NgxPaginationModule} from 'ngx-pagination';

//servicios
import { FirebaseService } from './services/firebase.service'
import { PacienteService } from './services/paciente.service'

//paginas
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { NuevaVisitaComponent } from './pages/nueva-visita/nueva-visita.component'
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component'

//componentes
import { HeaderComponent } from './components/header/header.component'
import { ForgetPwdComponent } from './components/forget-pwd/forget-pwd.component';
import { SignupComponent } from './components/signup/signup.component';
import { ModificarClienteComponent } from './components/modificar-cliente/modificar-cliente.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetPwdComponent,
    AboutComponent,
    HeaderComponent,
    ClientesComponent,
    VisitasComponent,
    MascotasComponent,
    NuevoClienteComponent,
    NuevaVisitaComponent,
    ModificarClienteComponent,
    FiltrartablaPipe
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy 
    },
    FirebaseService,
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
