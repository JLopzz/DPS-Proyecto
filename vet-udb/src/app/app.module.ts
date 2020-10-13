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
import { AuthService } from './services/auth.service'

//paginas
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

//componentes
import { HeaderComponent } from './components/header/header.component'
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetPwdComponent,
    VerifyEmailComponent,
    AboutComponent,
    HeaderComponent
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
